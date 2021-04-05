import { exists } from "https://deno.land/std/fs/exists.ts"
import { Application, Router, HttpError, Status, send } from "https://deno.land/x/oak/mod.ts";
import { dashboardHTML, replayerHTML } from './views.ts';

const app = new Application();
const router = new Router();

// Error Handling
app.use(async (context, next) => {
  try {
    await next();
  } catch (e) {
    if (e instanceof HttpError) {
      context.response.status = e.status as any;
      if (e.expose) {
        context.response.body = `<!doctype html><html><body><h1>${e.status} - ${e.message}</h1></body></html>`;
      } else {
        context.response.body = `<!doctype html><html><body><h1>${e.status} - ${Status[e.status]}</h1></body></html>`;
      }
    } else if (e instanceof Error) {
      context.response.status = 500;
      context.response.body = `<!doctype html><html><body><h1>500 - Internal Server Error</h1></body></html>`;
      console.log("Unhandled Error:", e.message);
      console.log(e.stack);
    }
  }
});

// Request Routing
router
  .get("/", ctx=> {
    ctx.response.body = "2021 Summit Demo"
  })
  .get("/dashboard", ctx=> {
    ctx.response.body = dashboardHTML;
  })
  .get("/replay", ctx=> {
    ctx.response.body = replayerHTML;
  })
  .get("/assets/scripts/:path+", async ctx => {
    const fileName = `./assets/scripts/${ctx.params['path']}`;
    ctx.response.type = 'text/javascript';
    if (await exists(fileName)) {
      ctx.response.body = await Deno.open(fileName);
    } else if (await exists(fileName.replace('.js','.ts'))) {
      const { files, diagnostics } = await Deno.emit(fileName.replace('.js','.ts'), {
        check: false,
        bundle: 'esm',
        compilerOptions: {
          lib: ['es6','dom'],
          module: 'es6',
          target: 'es6'
        }
      });
      if (diagnostics.length) {
        console.warn(Deno.formatDiagnostics(diagnostics));
      }
      ctx.response.body = files['deno:///bundle.js'];
    } else {
      ctx.response.body = '';
    }
  })
  .get("/assets/:path+", async ctx => {
    await send(ctx, ctx.request.url.pathname, {
      root: `${Deno.cwd()}`
    });
  });

app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener('listen', ({hostname, port}) => {
  console.log(`Serving ${Deno.cwd()}`);
  console.log(`Start listening on ${hostname}:${port}`);
});

// async function bundleFiles(path:string) {
//   const { files, diagnostics } = await Deno.emit(path,{
//       check: false,
//       bundle: "esm",
//       compilerOptions: {
//           lib: ["es6", "dom"],
//           module: 'es6',
//           target: 'es6'
//       }
//   });
//   if (diagnostics.length) {
//       console.warn(Deno.formatDiagnostics(diagnostics));
//   }
//   Deno.writeTextFile(path.replace('/src','').replace('.ts','.js'), files['deno:///bundle.js']);
// }


// let watchPaths = Array.from([...walkSync('.')])
//     .filter(path=>path.isDirectory&&(/components\/.+\/(?:src|demo)/).test(path.path))
//     .map(path=>path.path);

// const watcher = Deno.watchFs(watchPaths, {recursive: true});
// for await (const event of watcher) {
//     console.log(event);
//     event.paths.map(path=> {
//         if ((/components\/.+\/src/).test(path)) {
//             bundleFiles(path);
//         } else {

//         }
//     });
// }


await app.listen({hostname: "0.0.0.0", port: 8000 });
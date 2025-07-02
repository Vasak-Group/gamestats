export async function loadLayoutMiddleware(route: any) {
  try {
    let layout = route.meta.layout || "WebSite";

    let layoutComponent = await import(`@/layouts/${layout}.vue`);
    route.meta.layoutComponent = layoutComponent.default;
  } catch (e) {
    console.error("Error occurred in processing of layouts: ", e);
    console.log("Mounted WebSite");
    let layout = "WebSite";
    let layoutComponent = await import(`@/layouts/${layout}.vue`);
    route.meta.layoutComponent = layoutComponent.default;
  }
}

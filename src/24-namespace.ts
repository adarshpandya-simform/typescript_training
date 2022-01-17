// to run this file, type in this comman in
// command prompt => `ts-node {filename}.ts`

// declaring a dummy express namespace with use and getfunction
namespace express {
  export function use(callback: Function): void {
    callback();
  }
  export type Request = { body: null; headers: null; params: null };
  export type Response = {
    text: () => null;
    json: () => null;
    send: () => null;
  };
  export function get(url: string, callback: Function): void {
    console.log(`get request to ${url}`);
    let req: Request = { body: null, headers: null, params: null };
    let res: Response = {
      text: () => null,
      json: () => null,
      send: () => null,
    };
    callback(req, res);
  }
}

export default express;

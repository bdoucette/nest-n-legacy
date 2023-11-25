import { hapiServer } from '@legacy/my-legacy/hapi';
import { Injectable } from '@nestjs/common';
import { Request, Response, Router } from 'express';

@Injectable()
export class LegacyService {
  private nestJsRouteRegexes: RegExp[];

  public registerNestJsRoutes(router: Router): void {
    const routeRegexes: RegExp[] = router.stack
      .filter((r) => r.route)
      .map((r) => r.regexp);
    this.nestJsRouteRegexes = routeRegexes;
  }

  public isNestJsRoute(url: string): boolean {
    return this.nestJsRouteRegexes.some((r) => r.test(url));
  }

  public async handleLegacyRequest(req: Request, res: Response): Promise<void> {
    const { rawPayload, statusCode, headers } = await hapiServer.inject({
      method: req.method,
      url: req.baseUrl,
      headers: req.headers,
      payload: req.body,
    });
    res.status(statusCode).set(headers).send(rawPayload);
  }
}

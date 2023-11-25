import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { LegacyService } from './legacy.service';

@Injectable()
export class LegacyMiddleware implements NestMiddleware {
  constructor(private legacyService: LegacyService) {}

  public async use(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    if (this.legacyService.isNestJsRoute(req.baseUrl)) {
      next();
    } else {
      await this.legacyService.handleLegacyRequest(req, res);
    }
  }
}

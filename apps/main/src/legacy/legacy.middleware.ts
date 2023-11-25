import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { LegacyService } from './legacy.service';

@Injectable()
export class LegacyMiddleware implements NestMiddleware {
  constructor(private legacyService: LegacyService) {}

  public async use(req: Request, res: Response, next: NextFunction) {
    if (this.legacyService.isNestJsRoute(req.baseUrl)) {
      next();
    } else {
      this.legacyService.handleLegacyRequest(req, res);
    }
  }
}

import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/shared/jwt-auth.guard";
import { Sus } from "./sus";
import { SusService } from "./sus.service";

@Controller('api/sus')
export class SusController {
    constructor(private SusService: SusService){ }

    @UseGuards(JwtAuthGuard)
    @Post('create')
    async create(@Body() task: Sus) : Promise<Sus>{
        return this.SusService.create(task);
    }
}


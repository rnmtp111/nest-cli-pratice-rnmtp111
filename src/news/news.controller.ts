import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { NewsService } from './News.service';


@Controller('news')
export class NewsController {
    constructor(private readonly newsservice: NewsService) { }

    @Get()
    get(): string {
        return this.newsservice.get();

    }

    @Get(':id')
    getOne(@Param('id') id) {
        return this.newsservice.getOne(id);

    }

    @Post()
    postOne(@Body() body) {
        return this.newsservice.postOne(body);
    }

    @Put(':id')
    putuser(@Param('id') id, @Body() body) {
        return this.newsservice.putuser(id, body);
    }


    @Delete(':id')
    deleteuser(@Param('id') id) {
        return this.newsservice.Deleteuser(id);;
    }
}

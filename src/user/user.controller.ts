import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UserService } from './User.service';


@Controller('user')
export class UserController {
    constructor(private readonly userservice: UserService) { }

    @Get()
    get(): string {
        return this.userservice.get();

    }

    @Get(':id')
    getOne(@Param('id') id) {
        return this.userservice.getOne(id);

    }

    @Post()
    postOne(@Body() body) {
        return this.userservice.postOne(body);
    }

    @Put(':id')
    putuser(@Param('id') id, @Body() body) {
        return this.userservice.putuser(id, body);
    }


    @Delete(':id')
    deleteuser(@Param('id') id) {
        return this.userservice.Deleteuser(id);;
    }
}

import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { StudentService } from './Student.service';


@Controller('student')
export class StudentController {
    constructor(private readonly studentservice: StudentService) { }

    @Get()
    get(): string {
        return this.studentservice.get();

    }

    @Get(':id')
    getOne(@Param('id') id) {
        return this.studentservice.getOne(id);

    }

    @Post()
    postOne(@Body() body) {
        return this.studentservice.postOne(body);
    }

    @Put(':id')
    putuser(@Param('id') id, @Body() body) {
        return this.studentservice.putuser(id, body);
    }


    @Delete(':id')
    deleteuser(@Param('id') id) {
        return this.studentservice.Deleteuser(id);;
    }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { BlogsService} from './../blogs.service'


@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.scss']
})
export class BlogContentComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private blogsService: BlogsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=> {
      const id = params.id;
     /*const blog =  this.blogsService.getBlog(id); */
      
    });
    }

}

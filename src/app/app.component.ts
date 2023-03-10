import { Component, OnInit } from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'
import { ActivatedRoute, Router } from '@angular/router'
import { of } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../demo-styling.css']
})
export class AppComponent implements OnInit {

  data: Data = {
    title: "My prerendered site",
    description: "Awesome prerendered site",
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private meta: Meta,
    private title: Title
  ) { }

  ngOnInit() {
    this.getData()
      .subscribe(data => {
        this.setMetaData(data)
      })
  }

  getData() {
    return of(this.data)
  }

  setMetaData(data: Data) {
    this.title.setTitle(data.title)
    this.meta.updateTag({ 'name': 'description', 'content': data.description })
    this.meta.updateTag({ 'name': 'twitter:card', 'content': 'summary_large_image' })
    this.meta.updateTag({ 'name': 'twitter:title', 'content': data.title })
    this.meta.updateTag({ 'name': 'twitter:text:title', 'content': data.title })
    this.meta.updateTag({ 'name': 'twitter:description', 'content': data.description })
    this.meta.updateTag({ 'name': 'twitter:image:alt', 'content': data.title })
    this.meta.updateTag({ 'property': 'og:title', 'content': data.title })
    this.meta.updateTag({ 'property': 'og:image:alt', 'content': data.title })
    this.meta.updateTag({ 'property': 'og:description', 'content': data.description })
  }
}

export interface Data { title: string; description: string }

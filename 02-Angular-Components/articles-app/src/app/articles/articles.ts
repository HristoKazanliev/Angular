import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article.model';
import { ArticleData } from '../data/data';
import { ArticleComponent } from "../article/article";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [ArticleComponent, CommonModule],
  templateUrl: './articles.html',
  styleUrl: './articles.css',
})
export class ArticlesComponent implements OnInit {
  articles: Article[] = [];

  ngOnInit(): void {
    this.articles = new ArticleData().getData();
  }

}

import { Component } from '@angular/core';
import { Intro } from "./intro/intro";
import { Experiences } from "./experiences/experiences";
import { Education } from "./education/education";
import { Skills } from "./skills/skills";

@Component({
  selector: 'app-home',
  imports: [Intro, Experiences, Education, Skills],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}

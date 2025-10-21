import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import prompts from './prompts.json';

@Component({
  selector: 'prompt',
  standalone: true, 
  imports: [CommonModule, FormsModule],
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.css'],
})
export class Prompt {

  // prompt = {
  //   characterType: '',
  // };

  prompt: any = {};
  generatedPrompt: any = {};
  promptComplete = false;
  characters: any[] = [];

  handleMessage(prompt: any): void {
    // const text = prompt.text?.toLowerCase() ?? '';

    this.generatedPrompt = {};
    this.promptComplete = false;
    this.promptMe(prompt);

    // if (text.includes(' prompt me')) {
    //   response = this.promptMe(message);
    // } else if (text.includes(' ask me') || this.checkForChar(text) !== false) {
    //   response = this.askMe(message);
    // }
  }

  getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }

  listCharacters(prompt: any, except: string, except2: string) {
    this.characters = [];

    for (const value of prompts.characters) {
      const isExcluded = value.name === except || value.name === except2;
      // const hasBook1 = message.includes(' book1') ? value.book1 === true : true;
      // const isMain = message.includes(' main') ? 
      //   (value.name === 'Clarke' || value.name === 'Davy') : true;

      if (!isExcluded) {
        for (let i = 0; i < value.freq; i++) {
          this.characters.push(value);
        }
      }
    }
  }

  promptMe(prompt: any): void {
    const selected: any = {};

    // console.log(prompt);

    // === CHARACTERS ===

    this.generatedPrompt.characters = [];
    if (!prompt.number) prompt.number = 2;

    if ((prompt.characterType === 'BOOK' && prompt.include)) {
      selected.char1 = prompt.include;
      this.generatedPrompt.characters.push(selected.char1);
    }
    else if ((prompt.characterType === 'INPUT' && prompt.char1)) {
      selected.char1 = prompt.char1;
      this.generatedPrompt.characters.push(selected.char1);
    }
    else {
      this.listCharacters(prompt, '', '');
      selected.char1 = this.characters[this.getRandomInt(this.characters.length)].name;
      this.generatedPrompt.characters.push(selected.char1);
    }

    if (prompt.number > 1) {
      if ((prompt.characterType === 'INPUT' && prompt.char2)) {
        selected.char2 = prompt.char2;
        this.generatedPrompt.characters.push(selected.char2);
      }
      else {
        this.listCharacters(prompt, selected.char1, '');
        selected.char2 = this.characters[this.getRandomInt(this.characters.length)].name;
        this.generatedPrompt.characters.push(selected.char2);
      }
    }

    if (prompt.number > 2) {
      this.listCharacters(prompt, selected.char1, selected.char2);
      selected.char2 = this.characters[this.getRandomInt(this.characters.length)].name;
      this.generatedPrompt.characters.push(selected.char2);
    }

    // === SETTING ===

    this.generatedPrompt.setting = prompts.setting[this.getRandomInt(prompts.setting.length)].text;

    // === SITUATION ===

    let category = 'normal';
    if (prompt.cat === 'fanfic') category = 'fanfic';
    else if (prompt.cat === 'xmas') category = 'xmas';
    else if (prompt.cat === 'labyrinth') category = 'labyrinth';
    else if (prompt.cat === 'buffy') category = 'buffy';

    const situations = prompts.situation.filter(sit => sit.cat === category);
    this.generatedPrompt.situation = situations[this.getRandomInt(situations.length)].text;

    // === TONE ===

    this.generatedPrompt.tone = prompts.tone[this.getRandomInt(prompts.tone.length)].text;

    // === BONUS / HARDMODE ===

    if (prompt.extra === 'hardmode') {
      this.generatedPrompt.hardmode = prompts.twist[this.getRandomInt(prompts.twist.length)].text;
    } 
    else if (prompt.extra === 'bonus'){
      this.generatedPrompt.bonus = prompts.include[this.getRandomInt(prompts.include.length)].text;
    }

    // console.log(this.generatedPrompt);
    this.promptComplete = true;
  }



}
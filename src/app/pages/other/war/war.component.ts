import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import rawCharacters from './chars.json';

type GameType = 'onePiece' | 'jewelThieves';
type Character = {
  id: string;
  name: string;
  img: string;
  losses?: number;
};

const characters = rawCharacters as Record<GameType, Character[]>;

@Component({
  selector: 'war',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './war.component.html',
  styleUrls: ['./war.component.css'],
})
export class War implements OnInit {
  gameType: GameType = 'jewelThieves';
  people: Character[] = characters[this.gameType];

  group1: Character[] = [];
  group2: Character[] = [];
  setAside: Character[] = [];

  ngOnInit(): void {
    const maxTotal = 50;
    const shuffled = [...this.people]
      .map(p => ({ ...p, losses: 0 }))
      .sort(() => Math.random() - 0.5)
      .slice(0, maxTotal); // ✅ Limit total number

    const half = Math.floor(shuffled.length / 2);

    this.group1 = shuffled.slice(0, half);
    this.group2 = shuffled.slice(half);
  }

  handleWin(winnerGroup: number): void {
    if (this.group1.length === 0 || this.group2.length === 0) return;

    const current1 = this.group1[0];
    const current2 = this.group2[0];

    const newGroup1 = this.group1.slice(1);
    const newGroup2 = this.group2.slice(1);

    const winner = winnerGroup === 1 ? current1 : current2;
    const loser = winnerGroup === 1 ? current2 : current1;
    const updatedLoser = { ...loser, losses: (loser.losses ?? 0) + 1 };

    const survivors = [winner, ...(updatedLoser.losses < 2 ? [updatedLoser] : []), ...this.setAside];

    if (winnerGroup === 1) {
      this.group1 = [...newGroup1, ...survivors];
      this.group2 = newGroup2;
    } else {
      this.group2 = [...newGroup2, ...survivors];
      this.group1 = newGroup1;
    }

    this.setAside = [];
  }

  handleTie(): void {
    const group1ToSetAside = this.group1.slice(0, 4);
    const group2ToSetAside = this.group2.slice(0, 4);

    this.setAside = [...this.setAside, ...group1ToSetAside, ...group2ToSetAside];

    this.group1 = this.group1.slice(4);
    this.group2 = this.group2.slice(4);
  }

  get current1(): Character | undefined {
    return this.group1[0];
  }

  get current2(): Character | undefined {
    return this.group2[0];
  }
}

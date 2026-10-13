import { Component, OnInit } from '@angular/core';

class Skill {
	name: string;
	level: number;
	circles: string[] = [];
	constructor(name: string, level: number) {
		this.name = name;
		this.level = level;
		for (let i = 0; i < level; i++) {
			this.circles.push('1');
		}
		for (let i = 5 - level; i > 0; i--) {
			this.circles.push('0');
		}
	}
}

@Component({
	selector: 'app-skills',
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

	skills: Skill[] = [];

	getSkills(column: number) {
		const leftColumn: Skill[] = [];
		const rightColumn: Skill[] = [];
		for (let i = 0; i < this.skills.length; i++) {
			if (i < this.skills.length / 2) {
				leftColumn.push(this.skills[i]);
			} else {
				rightColumn.push(this.skills[i]);
			}
		}
		return column === 0 ? leftColumn : rightColumn;
	}

	ngOnInit() {
		this.skills.push(new Skill('Python', 5));
		this.skills.push(new Skill('Databricks', 5));
		this.skills.push(new Skill('Data Pipelines', 5));
		this.skills.push(new Skill('Terraform', 4));
		this.skills.push(new Skill('PySpark', 4));
		this.skills.push(new Skill('SQL', 4));
		this.skills.push(new Skill('Google Cloud', 4));
		this.skills.push(new Skill('Postgres', 3));
		this.skills.push(new Skill('Airflow', 3));
		this.skills.push(new Skill('AWS', 3));
	}

}

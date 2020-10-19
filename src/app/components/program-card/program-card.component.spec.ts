import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramCardComponent } from './program-card.component';

describe('ProgramCardComponent', () => {
  let component: ProgramCardComponent;
  let fixture: ComponentFixture<ProgramCardComponent>;
  let program = {
      "mission_name": "RazakSat",
      "mission_id": [],
      "launch_year": "2009",
      "rocket": {
        "first_stage": {
          "cores": [
            {
              "land_success": null
            }
          ]
        }
      },
      "launch_success": true,
      "links": {
        "mission_patch_small": "https://images2.imgbox.com/a7/ba/NBZSw3Ho_o.png"
      }
    };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramCardComponent);
    component = fixture.componentInstance;
    component.program = program;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

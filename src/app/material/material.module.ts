import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatButtonModule } from '@angular/material/button'


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule
    ],
    exports: [
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule
    ]
})

export class MaterialModule { }

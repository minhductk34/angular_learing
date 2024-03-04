import { Component } from '@angular/core';
import { HeaderAdminComponent } from "../../header-admin/header-admin.component";
import { SidebarAdminComponent } from "../../sidebar-admin/sidebar-admin.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-admin',
    standalone: true,
    templateUrl: './admin.component.html',
    styleUrl: './admin.component.css',
    imports: [HeaderAdminComponent, SidebarAdminComponent,RouterOutlet ]
})
export class AdminComponent {

}

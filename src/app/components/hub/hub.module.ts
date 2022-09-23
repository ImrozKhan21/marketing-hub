import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HubComponent} from './hub.component';
import {RouterModule} from "@angular/router";
import {ToolsComponent} from './tools/tools.component';
import {TablesComponent} from './tables/tables.component';
import {SuggestionsComponent} from './suggestions/suggestions.component';
import {BookmarksComponent} from './bookmarks/bookmarks.component';
import {HubHomeComponent} from './hub-home/hub-home.component';
import {HubRightbarComponent} from './hub-rightbar/hub-rightbar.component';
import {DividerModule} from "primeng/divider";
import {CardModule} from "primeng/card";
import {MarketplaceComponent} from './marketplace/marketplace.component';
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {ReactiveFormsModule} from "@angular/forms";
import {DropdownModule} from "primeng/dropdown";
import {EventsComponent} from './events/events.component';
import {LearningComponent} from './learning/learning.component';
import {CollabsComponent} from './collabs/collabs.component';
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import {CommonHeaderComponent} from './common-header/common-header.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ProfileFormComponent} from "../profile-form/profile-form.component";
import {InputTextareaModule} from "primeng/inputtextarea";
import {MultiSelectModule} from "primeng/multiselect";
import {ChipModule} from "primeng/chip";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {CollabDetailsComponent} from './collab-details/collab-details.component';
import {DcaCommonModule} from "../../dca-common/dca-common.module";
import {TabMenuModule} from "primeng/tabmenu";
import {PipesModule} from "../../pipes/pipes.module";
import { GettingStartedComponent } from './getting-started/getting-started.component';
import {TableModule} from "primeng/table";
import {ProfilePreferencesComponent} from "../profile-preferences/profile-preferences.component";
import {TieredMenuModule} from "primeng/tieredmenu";
import {DialogModule} from "primeng/dialog";

const routes = [
  {
    path: '',
    component: HubComponent,
    children: [
      {
        path: '',
        component: HubHomeComponent
      },
      {
        path: 'updates',
        component: HubHomeComponent
      },
      {
        path: 'profile',
        component: ProfileFormComponent
      },
      {
        path: 'tools',
        component: ToolsComponent
      },
      {
        path: 'apps',
        component: TablesComponent
      },
      {
        path: 'ideas',
        component: SuggestionsComponent
      },
      {
        path: 'bookmarks',
        component: BookmarksComponent
      },
      {
        path: 'marketplace',
        component: MarketplaceComponent
      },
      {
        path: 'events',
        component: EventsComponent
      },
      {
        path: 'learning',
        component: LearningComponent
      },
      {
        path: 'collaboration',
        component: CollabsComponent
      },
      {
        path: 'collab-privacy-laws',
        component: CollabDetailsComponent
      },
      {
        path: 'collab-privacy-regulators',
        component: CollabDetailsComponent
      },
      {
        path: 'sensitive-personal-info-taxonomy',
        component: CollabDetailsComponent
      },
      {
        path: 'preferences',
        component: ProfilePreferencesComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    HubComponent,
    ToolsComponent,
    TablesComponent,
    SuggestionsComponent,
    BookmarksComponent,
    HubHomeComponent,
    HubRightbarComponent,
    MarketplaceComponent,
    EventsComponent,
    LearningComponent,
    CollabsComponent,
    CommonHeaderComponent,
    CollabDetailsComponent,
    GettingStartedComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DividerModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    DropdownModule,
    ProgressSpinnerModule,
    ToastModule,
    FontAwesomeModule,
    InputTextareaModule,
    MultiSelectModule,
    ChipModule,
    OverlayPanelModule,
    DcaCommonModule,
    TabMenuModule,
    PipesModule,
    TableModule,
    TieredMenuModule,
    DialogModule,
  ],
  exports: [RouterModule]
})
export class HubModule {
}

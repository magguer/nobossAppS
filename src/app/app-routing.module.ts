// Angular 
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Servicios y FireBase 

import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

// Componentes //

// -- A - Basics // 

//// ---- Header //
import { HeaderComponent } from './components/a-basics/header/header.component';
//// ---- Footer // 
import { FooterComponent } from './components/a-basics/footer/footer.component';
//// ---- Home //
import { HomeComponent } from './components/a-basics/home/home.component';
//// ---- Login // 
import { LoginComponent } from './components/a-basics/login/login.component';
//// ---- Signin //
import { SigninComponent } from './components/a-basics/signin/signin.component';
//// ---- Menú Noboss //
import { MenunobossComponent } from './components/a-basics/menunoboss/menunoboss.component';

//// -- B - Components //

////---- Tus Proyectos //
import { TusproyectosComponent } from './components/b-components/tusproyectos/tusproyectos.component';
//////// -------- (children - Tus Proyectos) Crear Proyecto//
import { CrearproyectoComponent } from './components/b-components/tusproyectos/childs/crearproyecto/crearproyecto.component';

////---- Explorador //
import { ExploradorComponent } from './components/b-components/explorador/explorador.component';
//////// -------- (children - Explorador) Perfil Público Proyecto //
import { PerfilproyectoComponent } from './components/b-components/explorador/childs/perfilproyecto/perfilproyecto.component';

////---- Market //
import { MarketComponent } from './components/b-components/market/market.component';
////////---- (children - Market) Grupos de Descuento //
import { GruposdedescuentoComponent } from './components/b-components/market/childs/gruposdedescuento/gruposdedescuento.component';
////////---- (children - Market) Panel Nobox //
import { PanelnoboxComponent } from './components/b-components/market/childs/panelnobox/panelnobox.component';
////////---- (children - Market) Perfil Publico Proveedor //
import { PerfilproveedorComponent } from './components/b-components/market/childs/perfilproveedor/perfilproveedor.component';

///---- Panel Gestión //
import { PanelgestionComponent } from './components/b-components/panelgestion/panelgestion.component';
////////---- (children - Panel Gestión) Agenda //
import { AgendaComponent } from './components/b-components/panelgestion/childs/agenda/agenda.component';
////////---- (children - Panel Gestión) Clientes //
import { ClientesComponent } from './components/b-components/panelgestion/childs/clientes/clientes.component';
////////---- (children - Panel Gestión) Comunidad //
import { ComunidadComponent } from './components/b-components/panelgestion/childs/comunidad/comunidad.component';
////////---- (children - Panel Gestión) Configuración Proyecto //
import { ConfigproyectoComponent } from './components/b-components/panelgestion/childs/configproyecto/configproyecto.component';
////////---- (children - Panel Gestión) Factura Venta //
import { FacturaventaComponent } from './components/b-components/panelgestion/childs/facturaventa/facturaventa.component';
////////---- (children - Panel Gestión) Inventario //
import { InventarioComponent } from './components/b-components/panelgestion/childs/inventario/inventario.component';
////////---- (children - Panel Gestión) Registro Gasto //
import { RegistrogastoComponent } from './components/b-components/panelgestion/childs/registrogasto/registrogasto.component';
////////---- (children - Panel Gestión) Resumen //
import { ResumenComponent } from './components/b-components/panelgestion/childs/resumen/resumen.component';
////////---- (children - Panel Gestión) Servicios //
import { ServiciosComponent } from './components/b-components/panelgestion/childs/servicios/servicios.component';



const routes: Routes = [

  
  {

    // Tus Proyectos y sus subcomponentes //
    path: 'proyectos', component: TusproyectosComponent,
    children: [
      { path: 'panelgestion', component: PanelgestionComponent, ...canActivate(()=> redirectUnauthorizedTo(['/proyectos/crearproyecto'])) },
      { path: 'marketpage', component: MarketComponent },
      { path: 'crearproyecto', component: CrearproyectoComponent },
      { path: 'inventario', component: InventarioComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login'])) },
      { path: 'servicios', component: ServiciosComponent,  ...canActivate(()=> redirectUnauthorizedTo(['/login'])) },
      { path: 'agenda', component: AgendaComponent,  ...canActivate(()=> redirectUnauthorizedTo(['/login'])) },
      { path: 'clientes', component: ClientesComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login'])) },
      { path: 'resumen', component: ResumenComponent,  ...canActivate(()=> redirectUnauthorizedTo(['/login'])) },
      { path: 'comunidad', component: ComunidadComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login'])) },
      { path: 'registrogasto', component: RegistrogastoComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login'])) },
      { path: 'facturaventa', component: FacturaventaComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login'])) },
      { path: 'panelgruposdedescuento', component: GruposdedescuentoComponent },
      { path: 'panelnobox', component: PanelnoboxComponent },

    ]
  },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// Componentes 
import { AppComponent } from './app.component';

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



import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TusproyectosComponent,
    PanelgestionComponent,
    MarketComponent,
    SigninComponent,
    LoginComponent,
    HomeComponent,
    MenunobossComponent,
    AgendaComponent,
    ClientesComponent,
    ComunidadComponent,
    ConfigproyectoComponent,
    FacturaventaComponent,
    InventarioComponent,
    RegistrogastoComponent,
    ResumenComponent,
    ServiciosComponent,
    CrearproyectoComponent,
    GruposdedescuentoComponent,
    PanelnoboxComponent,
    PerfilproveedorComponent,
    PerfilproyectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

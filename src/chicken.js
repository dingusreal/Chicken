
import GObject from 'gi://GObject';
import Gio from 'gi://Gio';
import Gtk from 'gi://Gtk?version=4.0';
import Adw from 'gi://Adw?version=1';
import Gdk from 'gi://Gdk';

export const FbrApplication = GObject.registerClass({
	GTypeName: 'FbrApplication'
}, class extends Adw.Application {
  vfunc_startup() {
		super.vfunc_startup();
		const provider = new Gtk.CssProvider();
		provider.load_from_resource("/io/github/dingusreal/Chicken/css/chicken.css");
		Gtk.StyleContext.add_provider_for_display(
			Gdk.Display.get_default(),
			provider,
			Gtk.STYLE_PROVIDER_PRIORITY_APPLICATION
		);
		const styleManager = Adw.StyleManager.get_default();
}
	vfunc_activate() {
		const window = new Adw.ApplicationWindow({ application: this });
		window.default_height = 560;
		window.default_width = 640;
	  const view = new Adw.ToolbarView();
	  view.set_top_bar_style(0);
	  const header = new Adw.HeaderBar();
	  const titleWidget = new Adw.WindowTitle();
	  const box = new Gtk.Box();
	  titleWidget.set_title("Chicken");
	  header.set_title_widget(titleWidget);
	  view.add_top_bar(header);
	  const chicken = Gtk.Image.new_from_resource("/io/github/dingusreal/Chicken/chicken.png");
    chicken.hexpand = true;
    chicken.vexpand = true;
	  chicken.add_css_class("chicken");
	  window.set_content(view);
    const btn = new Gtk.CheckButton({label: "Enable 3D"});
    btn.connect('toggled',(button) => {
      if (button.active === true) {
        chicken.add_css_class("animate");
      } else {
        chicken.remove_css_class("animate");
      }
    });
    view.set_content(box);
    box.set_orientation(1);
    box.add_css_class("chickenbox");
    btn.hexpand = false;
    btn.halign = 1;
    box.append(chicken);
    box.append(btn)
	  window.present();
	}
})



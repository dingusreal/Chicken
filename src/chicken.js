
import GObject from 'gi://GObject';
import Gio from 'gi://Gio';
import Gtk from 'gi://Gtk?version=4.0';
import Adw from 'gi://Adw?version=1';

export const FbrApplication = GObject.registerClass({
	GTypeName: 'FbrApplication'
}, class extends Adw.Application {
	vfunc_activate() {
		const window = new Adw.ApplicationWindow({ application: this });
		window.default_height = 560;
		window.default_width = 640;
	  const chicken = Gtk.Image.new_from_resource("/io/github/dingusreal/Chicken/chicken.png");
	  const view = new Adw.ToolbarView();
	  const header = new Adw.HeaderBar();
	  const titleWidget = new Adw.WindowTitle();
	  titleWidget.set_title("chickne");
	  header.set_title_widget(titleWidget);
	  view.add_top_bar(header);
	  window.set_content(view);
    view.set_content(chicken);
	  window.present();
	}
})


import GObject from 'gi://GObject';
import Gio from 'gi://Gio';
import Gtk from 'gi://Gtk?version=4.0';
import Adw from 'gi://Adw?version=1';

pkg.initGettext();
pkg.initFormat();

import { FbrApplication } from './chicken.js';

export function main(argv) {
  console.log("welcom to chicken");
	return new FbrApplication({ 'application-id': pkg.name }).run(argv);
}






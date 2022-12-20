#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod localhost;

use localhost::server;
use tauri::Manager;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            localhost::server::create_callback_server,
        ])
        .setup(|app| {
            app.listen_global("close-server", |_| {
                let task = server::SERVER_TASK.get().unwrap();
                task.abort();
            });

            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

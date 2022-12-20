use tauri::{AppHandle, Manager};
use once_cell::sync::OnceCell;

#[derive(Clone, serde::Serialize, serde::Deserialize)]
struct CallbackResponse {
    url: String,
}

pub static SERVER_TASK : OnceCell<tokio::task::JoinHandle<()>> = OnceCell::new();

#[tauri::command]
pub async fn create_callback_server(app: AppHandle, callback_uri: String){
    let server = tiny_http::Server::http(callback_uri).unwrap();
    SERVER_TASK.get_or_init(|| {
        tokio::spawn(async move {
                for request in server.incoming_requests() {
                    app.emit_all("callback", Some(CallbackResponse {
                        url: request.url().to_string()
                    })).unwrap();
                }
            })
    });
}
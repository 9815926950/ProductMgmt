using ClientNotifications;
using Microsoft.AspNetCore.Mvc;
using static ClientNotifications.Helpers.NotificationHelper;

namespace ProductMgmt.Controllers {
    public class BaseController : Controller {
        private IClientNotification _clientNotificaion;

        public BaseController (IClientNotification clientNotificaion) {
            _clientNotificaion = clientNotificaion;
        }

        public void Notify(string message, NotificationType type, string model){
            _clientNotificaion.AddToastNotification(message,type,null);
        }
    }
}
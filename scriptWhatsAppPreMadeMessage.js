
initial();
function initial() {
    ("Script WhatsApp Web " + version);
    var script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.7.1.js'; // Check https://jquery.com/ for the current version
    document.getElementsByTagName('head')[0].appendChild(script);

    $("#pane-side").ready(() => {
            if (document.getElementById("pane-side")) {
                activeEvents();
            }
        }
    );
}

function activeEvents() {
    const documentListener = function (e) {
        if (e.altKey && e.code == "Numpad1") {
            e.preventDefault();
            e.stopPropagation();
            let el = document.querySelector('footer');
            el.setAttribute("role", "region");
            el.setAttribute("aria-label", getActiveConversationTitle());
            el = el ? el.querySelector('[contenteditable="true"]') : null;
            // if (el) {
            //     el.addEventListener("keyup", footerMessageBoxListener, false);
            //     el.addEventListener("focus", activeButtonToRecordEvent);
            //     listeners.push({ element: el, listener: footerMessageBoxListener, listenerType: "keyup" });
            //     listeners.push({ element: el, listener: activeButtonToRecordEvent, listenerType: "focus" });
            // }
            el.focus;
            el.textContent = "Teste";
        }
    };
    document.addEventListener("keydown", documentListener);

    listeners.push({ element: document, listener: documentListener, listenerType: "keydown" });

}

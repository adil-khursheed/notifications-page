const unreadMessages = document.querySelectorAll(".unread");
const notifications = document.getElementById("notif-number")
const markAll = document.getElementById("mark-all");

notifications.innerText = unreadMessages.length;

unreadMessages.forEach((message) => {
    message.addEventListener("click", () => {
        message.classList.remove("unread")
        const updatedUnreadMessages = document.querySelectorAll(".unread");
        notifications.innerHTML = updatedUnreadMessages.length;
    })
})

markAll.addEventListener("click", () => {
    unreadMessages.forEach((message) => {
        message.classList.remove("unread");
    })
    const updatedUnreadMessages = document.querySelectorAll(".unread");
    notifications.innerHTML = updatedUnreadMessages.length;
})
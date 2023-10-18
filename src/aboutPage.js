const aboutPage = () => {
    const content = document.getElementById("content");

    const historyCont = document.createElement("div");
    const scheduleCont = document.createElement("div");
    const contactCont = document.createElement("div");

    content.appendChild(historyCont);
    content.appendChild(scheduleCont);
    content.appendChild(contactCont);

    const list = document.createElement("ul");
    scheduleCont.appendChild(list);

    const arraySchedule = ["MON: 8-19", "TUE: 8-19", "WED: 8-19", "THUR: 8-19", "FRI: 8-21", "WEEKEND: CLOSED"];

    const history = document.createElement("p");
    history.textContent = "It all started back in a 1800 as a family business............................";

    arraySchedule.forEach(day => {
        const schedule = document.createElement("li");
        schedule.textContent = day;
        list.appendChild(schedule);
    });
    const contact = document.createElement("p");
    contact.textContent = "Telephone number: 00 123-456-789";

    historyCont.appendChild(history);
    contactCont.appendChild(contact);
}

export { aboutPage };
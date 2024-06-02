// Initial guest list
var originalGuestList = ["Zain", "Mehtab", "Karim"];
// Function to send dinner invitations
function sendInvitation(guest) {
    return "Dear ".concat(guest, ",\nYou are cordially invited to dinner at my place. It would be an honor to have your company.\nSincerely, [Zain Karim]");
}
// Display the initial invitations
console.log("Initial Invitations:");
originalGuestList.forEach(function (guest) {
    var invitationMessage = sendInvitation(guest);
    console.log(invitationMessage);
    console.log("---------------------");
});
// Simulate a guest not being able to make it
var UnableToAttendent = "Anwar";
console.log("\nUnfortunately, ".concat(UnableToAttendent, " can't make it to the dinner.\n"));
// Replace the guest who can't make it with a new guest
var NewGuest = "Muneer";
var indexOfUnableToAttend = originalGuestList.indexOf(UnableToAttendent);
originalGuestList[indexOfUnableToAttend] = NewGuest;
// Display the updated invitations
console.log("\nUpdated Invitations:");
originalGuestList.forEach(function (guest) {
    var invitationMessage = sendInvitation(guest);
    console.log(invitationMessage);
    console.log("---------------------");
});

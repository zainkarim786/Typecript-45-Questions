// Define a guest list
var Guestlist = ["Ali", "Mehtab", "Anwar"];
// Function to send dinner invitations
function SendInvitations(guest) {
    return "Dear ".concat(guest, ",\nYou are cordially invited to dinner at my place. It would be an honor to have your company.\nSincerely, [Zain Karim]");
}
// Loop through the guest list and send invitations
Guestlist.forEach(function (guest) {
    var invitationMessage = SendInvitations(guest);
    console.log(invitationMessage);
    console.log("---------------------");
});
// Print a message indicating the number of people invited to dinner
console.log("You are inviting ".concat(Guestlist.length, " people to dinner."));

// Define a guest list
var guestlist = ["Anas", "Mehtab", "Abdul Karim"];
// Function to send dinner invitations
function sendInvitations(guest) {
    return "Dear ".concat(guest, ",\nYou are cordially invited to dinner at my place. It would be an honor to have your company.\nSincerely, [Zain Karim]");
}
// Loop through the guest list and send invitations
guestlist.forEach(function (guest) {
    var invitationMessage = sendInvitations(guest);
    console.log(invitationMessage);
    console.log("---------------------");
});

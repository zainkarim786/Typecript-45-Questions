// Define a guest list
const Guestlist: string[] = ["Ali", "Mehtab", "Anwar"];

// Function to send dinner invitations
function SendInvitations(guest: string): string {
    return `Dear ${guest},\nYou are cordially invited to dinner at my place. It would be an honor to have your company.\nSincerely, [Zain Karim]`;
}

// Loop through the guest list and send invitations
Guestlist.forEach((guest) => {
    const invitationMessage = SendInvitations(guest);
    console.log(invitationMessage);
    console.log("---------------------");
});

// Print a message indicating the number of people invited to dinner
console.log(`You are inviting ${Guestlist.length} people to dinner.`);
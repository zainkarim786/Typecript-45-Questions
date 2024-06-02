// Define a guest list

const guestlist: string[] = ["Anas", "Mehtab", "Abdul Karim"]

// Function to send dinner invitations

function sendInvitations(guest :string): string{
    return `Dear ${guest},\nYou are cordially invited to dinner at my place. It would be an honor to have your company.\nSincerely, [Zain Karim]`;
}

// Loop through the guest list and send invitations

guestlist.forEach((guest) => {
    const invitationMessage = sendInvitations(guest)
    console.log(invitationMessage);
    console.log("---------------------");
})
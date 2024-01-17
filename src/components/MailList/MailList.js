import { Avatar, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";

    const emails = [
        {
          "id": "1",
          "senderName": "Hackerrank",
          "senderEmail": "hackerrank@example.com",
          "subject": "Meeting Tomorrow",
          "time": "5 hours ago",
          "image": "https://example.com/images/john_doe_avatar.jpg"
        },
        {
          "id": "2",
          "senderName": "Codeforces",
          "senderEmail": "codeforces@example.com",
          "subject": "Project Update",
          "time": "12 hours ago",
          "image": "https://example.com/images/alice_smith_avatar.jpg"
        },
        {
          "id": "3",
          "senderName": "Google",
          "senderEmail": "google@example.com",
          "subject": "Vacation Plans",
          "time": "1 day ago",
          "image": "https://example.com/images/bob_jones_avatar.jpg"
        },
        {
          "id": "4",
          "senderName": "Microsoft",
          "senderEmail": "microsoft@example.com",
          "subject": "Important Announcement",
          "time": "2 days ago",
          "image": "https://example.com/images/emily_white_avatar.jpg"
        },
        {
          "id": "4",
          "senderName": "Prayers Connect",
          "senderEmail": "prayersconnect@example.com",
          "subject": "Important Announcement",
          "time": "2 days ago",
          "image": "https://example.com/images/emily_white_avatar.jpg"
        }
      ]

const MailList = () => {
  return (
<>
<List>
  {emails.map((mail) => (
    <ListItem key={mail.id} disablePadding sx={{ background: 'white', borderRadius: '8px', marginBottom: '8px' }}>
      <ListItemButton>
        <ListItemIcon>
        <Avatar alt={mail.senderName} src="/static/images/avatar/1.jpg" />
        </ListItemIcon>
        <ListItemText
          primary={mail.senderName}
          secondary={
            <>
              <Typography
                component="span"
                variant="body2"
                color="text.primary"
              >
                {mail.subject}
              </Typography>
              {` - ${mail.time}`}
            </>
          }
        />
      </ListItemButton>
    </ListItem>
  ))}
</List>
</>
  );
};

export default MailList;
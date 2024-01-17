import { Avatar, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";

    const emails = [
        {
          "id": "1",
          "senderName": "Hackerrank",
          "senderEmail": "hackerrank@example.com",
          "subject": "Meeting Tomorrow",
          "time": "5 hours ago",
          "image": "https://i.ibb.co/C0L7qfS/800px-Hacker-Rank-Icon-1000px.png"
        },
        {
          "id": "2",
          "senderName": "Codeforces",
          "senderEmail": "codeforces@example.com",
          "subject": "Project Update",
          "time": "12 hours ago",
          "image": "https://i.ibb.co/brX4qX3/codeforces-logo.png"
        },
        {
          "id": "5",
          "senderName": "Prayers Connect",
          "senderEmail": "prayersconnect@example.com",
          "subject": "Important Announcement",
          "time": "3 days ago",
          "image": "https://i.ibb.co/ykpYYdy/prayers-connect-logo.jpg"
        },
        {
          "id": "3",
          "senderName": "Google",
          "senderEmail": "google@example.com",
          "subject": "Vacation Plans",
          "time": "1 day ago",
          "image": "https://i.ibb.co/Z2dH0kL/image8-2.webp"
        },
        {
          "id": "4",
          "senderName": "Microsoft",
          "senderEmail": "microsoft@example.com",
          "subject": "Important Announcement",
          "time": "2 days ago",
          "image": "https://i.ibb.co/9wHS9GH/microsoft-logo.webp"
        }
      ]

const MailList = ({searchValue}) => {

  const filteredEmail = searchValue !== null
  ? emails.filter((mail) => mail?.senderName.toLowerCase().includes(searchValue.toLowerCase()))
  : emails;

return (
<>
<List>
  {filteredEmail.map((mail) => (
    <ListItem key={mail.id} disablePadding sx={{ background: 'white', borderRadius: '8px', marginBottom: '8px' }}>
      <ListItemButton>
        <ListItemIcon>
        <Avatar alt={mail.senderName} src={mail.image} />
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
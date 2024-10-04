

const leaveRejecetionTemplate = (name, startDate, endDate) => {
    const formatDate = (value) => {
        if (!value) return 'N/A';
        const date = new Date(value); // 'value' refers to 'startDate'
        return new Intl.DateTimeFormat('en-GB', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        }).format(date); 
    };

    const start = formatDate(startDate);
    const end = formatDate(endDate);
	return `<!DOCTYPE html>
    <html>

    <head>
        <meta charset="UTF-8">
        <title>Leave Application Rejected</title>
        <style>
            body {
                background-color: #ffffff;
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.4;
                color: #333333;
                margin: 0;
                padding: 0;
            }

            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                text-align: center;
            }

            .message {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 20px;
            }

            .body {
                font-size: 16px;
                margin-bottom: 20px;
            }

            .cta {
                display: inline-block;
                padding: 10px 20px;
                background-color: #dc3545;
                color: #ffffff;
                text-decoration: none;
                border-radius: 5px;
                font-size: 16px;
                font-weight: bold;
                margin-top: 20px;
            }

            .support {
                font-size: 14px;
                color: #999999;
                margin-top: 20px;
            }

            .highlight {
                font-weight: bold;
                color: #dc3545;
            }
        </style>

    </head>

    <body>
        <div class="container">
            <div class="message">Leave Application Rejected</div>
            <div class="body">
                <p>Dear <strong>${name}</strong>,</p>
                <p>We regret to inform you that your leave application from <strong>${start}</strong> to <strong>${end}</strong> has been <span class="highlight">rejected</span>. If
                    you would like to discuss this further, <br/> please contact your supervisor.</p>
                <p>We apologize for any inconvenience this may have caused.</p>
            </div>
            <div class="support">If you need any assistance, please reach out to us at <a
                    href="mailto:nexisa1996@gmail.com">nexisa1996@gmail.com</a>.</div>
        </div>
    </body>

    </html>`;
};
module.exports = leaveRejecetionTemplate;
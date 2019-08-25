# 2019 ATS Email Templates

This repository includes all the email code for revision history, a guide to using the email templates, useful snippets and tips.

1. [2019 ATS Email Templates](#2019-ats-email-templates)
	1. [Todo list](#todo-list)
	2. [Useful URLs](#useful-urls)
		1. [Logos](#logos)
		2. [Icons](#icons)
		3. [Images](#images)
	3. [FAQ](#faq)
	4. [Code Snippets](#code-snippets)
		1. [Image Banner](#image-banner)
		2. [Bulletproof Button](#bulletproof-button)
		3. [Donation Box](#donation-box)
		4. [Footer](#footer)
		5. [Mission Footer](#mission-footer)
		6. [Social Share](#social-share)

## Todo list

1. Templates
   1. Newsletter
   2. Alumni eNews
   3. Alumni Event
   4. Alumni Letter w/o image
   5. Alumni Letter w/ image
2. Test
   1. Gmail
   2. Outlook
   3. Apple Mail
   4. Yahoo

## Useful URLs

### Logos

`http://support.ats.org/images/content/pagebuilder/ATS-logo-blue.png`

### Icons

`https://secure2.convio.net/ats/images/content/pagebuilder/footer-facebook.png`
`https://secure2.convio.net/ats/images/content/pagebuilder/footer-twitter.png`
`https://secure2.convio.net/ats/images/content/pagebuilder/footer-instagram.png`

### Images

`https://secure2.convio.net/ats/images/content/pagebuilder/Israel-Parade-2019-center.jpg`
`https://secure2.convio.net/ats/images/content/pagebuilder/Sznitman-Headshot-web.jpg`

## FAQ

**Will I have to adjust the size of my button?**
> No &ndash; will adjust depending on text.

**What happens if my button text is too long?**
> Text for button should be kept short. No more than 2-3 words.

**Can I adjust the button color?**
> The color for "learn more" should be ##208283.<br />
> The color for "donate" should be d1803e.

## Code Snippets

Below you will find snippets of code that you can place within your email template. This gives you the avility to customize emails templates and a useful place for referecence.

### Image Banner

```html
<tr>
	<td>
		<!-- START CENTERED IMAGE -->
		<div align="center" style="margin: 20px 0;">
			<a href="https://www.ats.org"><img src="https://secure2.convio.net/ats/images/content/pagebuilder/Israel-Parade-2019-center.jpg" width="600" class="image-resize" border="0" alt="Image"/></a>
		</div>
		<!-- END CENTERED IMAGE -->
	</td>
</tr>
```

### Bulletproof Button

```html
<table width="100%" border="0" cellspacing="0" cellpadding="0" role="button" style="margin: 20px 0;">
	<tr>
		<td align="center">
			<table border="0" cellspacing="0" cellpadding="0">
				<tr>
					<td align="center" bgcolor="#208283">
						<a href="https://ats.org" target="_blank" style="font-family: Arial, sans-serif; color: #ffffff; padding: 12px 18px; border: 1px solid #208283; display: inline-block;font-size:18px;font-weight:bold;text-align:center;text-decoration:none;text-transform: uppercase;">learn more</a>
					</td>
				</tr>
			</table>
		</td>
	</tr>
</table>
```

### Donation Box

```html
<!-- START OF DONATE SECTION -->
<table align="center" border="0" cellpadding="0" cellspacing="0" class="emailwrapto100pc" width="600" bgcolor="#2b365e">
	<tbody>
		<!-- START OF MESSAGE SECTION -->
		<tr>
			<td align="center" class="footer-text" style="color:#f3f3f3;font-family: Arial,'Helvetica Neue',sans-serif;padding: 30px 50px 20px 50px;">
				<div style="font-size:16px;line-height:25px">
					<h4 style="font-size:20px;margin-bottom: 15px;">Make a gift to the Technion Fund today!</h4>
					<p>The Technion is contributing to Israel and the global good in unprecedented ways. Help us ensure its continued advancement as a world-class institution of higher education.</p>
				</div>
			</td>
		</tr>
		<!-- END OF MESSAGE SECTION -->
        <tr>
			<td align="center" style="text-align:center;font-family: Arial,'Helvetica Neue',sans-serif;font-size:12px;color:#f3f3f3;line-height:18px;padding: 0 50px 30px 50px;">
				<!-- START OF BUTTON SECTION -->
				<table border="0" cellspacing="0" cellpadding="0" role="button">
					<tr>
						<td align="center">
							<table border="0" cellspacing="0" cellpadding="0">
								<tr>
									<td align="center" bgcolor="#d1803e">
										<a href="https://ats.org" style="font-family: Arial, sans-serif; color: #f3f3f3; padding: 12px 18px; border: 1px solid #d1803e; display: inline-block;font-size:18px;font-weight:bold;text-align:center;text-decoration:none;text-transform: uppercase;">donate</a>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
				<!-- END OF BUTTON SECTION -->
			</td>
		</tr>
	</tbody>
</table>
<!-- END OF DONATE SECTION -->

```

### Footer

```html
<!-- START OF FOOTER SECTION -->
<table align="center" border="0" cellpadding="0" cellspacing="0" class="emailwrapto100pc" width="600" bgcolor="#f3f3f3">
	<tbody>
		<tr>
			<td style="text-align:left;font-family: Arial,'Helvetica Neue',sans-serif;font-size:12px;color:#6b6b6b;line-height:18px;padding: 20px 30px;">
				<table width="50%" cellpadding="0" cellspacing="0" border="0" align="left" class="footer-left">
					<tbody>
						<tr>
							<td valign="top" class="footer-left" style="font-family: Arial,'Helvetica Neue',sans-serif;font-size:12px;line-height:18px;color:#888888;">
								<!-- START FOOTER DONATE BUTTON, make sure to update both links and adjust both widths as needed -->
								<div>
									American Technion Society<br />
									55 East 59th Street, New York, NY 10022
								</div>
								<!-- END FOOTER DONATE BUTTON -->
							</td>
						</tr>
					</tbody>
				</table>
				<table width="20%" cellspacing="0" cellpadding="0" border="0" align="right" class="footer-right">
					<tbody>
						<tr>
							<td valign="top" class="footer-right" style="font-family: Arial,'Helvetica Neue',sans-serif;color:#6b6b6b;padding-top:5px;">
								<a href="https://www.facebook.com/americantechnionsociety"><img src="https://secure2.convio.net/ats/images/content/pagebuilder/footer-facebook.png" border="0" alt="Facebook"/></a> &nbsp; &nbsp;
								<a href="https://twitter.com/TechnionUSA"><img src="https://secure2.convio.net/ats/images/content/pagebuilder/footer-twitter.png" border="0" alt="Twitter"/></a> &nbsp; &nbsp;
								<a href="https://www.instagram.com/americantechnionsociety"><img src="https://secure2.convio.net/ats/images/content/pagebuilder/footer-instagram.png" border="0" alt="Instagram"/></a>
							</td>
						</tr>
					</tbody>
				</table>
			</td>
		</tr>
		<tr>
			<td align="center" class="footer-text" style="color:#6b6b6b;font-family: Arial,'Helvetica Neue',sans-serif;font-size:12px;line-height:20px;padding:15px;">
				<div><a href="https://ats.org" style="color: #6b6b6b;text-decoration: none;">Contact</a> | <a href="https://ats.org" style="color: #6b6b6b; text-decoration: none;">Unsubscribe</a></div>
			</td>
		</tr>
	</tbody>
</table>
<!-- END OF FOOTER SECTION -->

```

### Mission Footer

```html
<!-- START OF FOOTER SECTION -->
<table align="center" border="0" cellpadding="0" cellspacing="0" class="emailwrapto100pc" width="600" bgcolor="#f3f3f3">
	<tbody>
		<!-- START OF MISSION SECTION -->
		<tr>
			<td align="left" class="footer-text" style="color:#6b6b6b;font-family: Arial,'Helvetica Neue',sans-serif;font-size:12px;line-height:18px;padding: 20px 30px;">
				<div>
					The American Technion Society supports visionary education and world-changing impact through the Technion–Israel Institute of Technology. For more than 75 years, our nationwide supporter network has funded new Technion scholarships, research, labs, and facilities that have helped
					deliver world-changing contributions and extend Technion education to campuses in three countries. Our investments in the Technion’s growth and innovation advance critical research and technologies that serve the State of Israel and the global good.
				</div>
			</td>
		</tr>
		<!-- END OF MISSION SECTION -->
		<tr>
			<td style="text-align:left;font-family: Arial,'Helvetica Neue',sans-serif;font-size:12px;color:#6b6b6b;line-height:18px;padding: 20px 30px;">
				<table width="50%" cellpadding="0" cellspacing="0" border="0" align="left" class="footer-left">
					<tbody>
						<tr>
							<td valign="top" class="footer-left" style="font-family: Arial,'Helvetica Neue',sans-serif;font-size:12px;line-height:18px;color:#888888;">
								<!-- START FOOTER DONATE BUTTON, make sure to update both links and adjust both widths as needed -->
								<div>
									American Technion Society<br />
									55 East 59th Street, New York, NY 10022
								</div>
								<!-- END FOOTER DONATE BUTTON -->
							</td>
						</tr>
					</tbody>
				</table>
				<table width="20%" cellspacing="0" cellpadding="0" border="0" align="right" class="footer-right">
					<tbody>
						<tr>
							<td valign="top" class="footer-right" style="font-family: Arial,'Helvetica Neue',sans-serif;color:#6b6b6b;padding-top:5px;">
								<a href="https://www.facebook.com/americantechnionsociety"><img src="https://secure2.convio.net/ats/images/content/pagebuilder/footer-facebook.png" border="0" alt="Facebook"/></a> &nbsp; &nbsp;
								<a href="https://twitter.com/TechnionUSA"><img src="https://secure2.convio.net/ats/images/content/pagebuilder/footer-twitter.png" border="0" alt="Twitter"/></a> &nbsp; &nbsp;
								<a href="https://www.instagram.com/americantechnionsociety"><img src="https://secure2.convio.net/ats/images/content/pagebuilder/footer-instagram.png" border="0" alt="Instagram"/></a>
							</td>
						</tr>
					</tbody>
				</table>
			</td>
		</tr>
		<tr>
			<td align="center" class="footer-text" style="color:#6b6b6b;font-family: Arial,'Helvetica Neue',sans-serif;font-size:12px;line-height:20px;padding:15px;">
				<div><a href="https://ats.org" style="color: #6b6b6b;text-decoration: none;">Contact</a> | <a href="https://ats.org" style="color: #6b6b6b; text-decoration: none;">Unsubscribe</a></div>
			</td>
		</tr>
	</tbody>
</table>
<!-- END OF FOOTER SECTION -->

```

### Social Share

```html
<!-- START OF SHARE SECTION -->
<table align="center" border="0" cellpadding="0" cellspacing="0" class="emailwrapto100pc" width="600" bgcolor="#bbbbbb">
	<tbody>
		<tr>
			<td style="text-align:left;font-family:Arial,'Helvetica Neue',sans-serif;font-size:18px;line-height:22px;color:#333333;padding:20px 30px;">
				<table width="50%" cellpadding="0" cellspacing="0" border="0" align="left" class="footer-left">
					<tbody>
						<tr>
							<td valign="top" class="footer-left" style="font-family: Arial,'Helvetica Neue',sans-serif;font-weight: bold;">
								<!-- START FOOTER DONATE BUTTON, make sure to update both links and adjust both widths as needed -->
								<div>
									Share with friends and family
								</div>
								<!-- END FOOTER DONATE BUTTON -->
							</td>
						</tr>
					</tbody>
				</table>
				<table width="20%" cellspacing="0" cellpadding="0" border="0" align="right" class="footer-right">
					<tbody>
						<tr>
							<td valign="top" class="footer-right" style="font-family:Arial,'Helvetica Neue',sans-serif;">
								<a href="https://www.facebook.com/americantechnionsociety"><img width="11px" height="23px" src="https://secure2.convio.net/ats/images/content/pagebuilder/footer-facebook.png" border="0" alt="Facebook"/></a> &nbsp; &nbsp;
								<a href="https://twitter.com/TechnionUSA"><img width="24px" height="20px" src="https://secure2.convio.net/ats/images/content/pagebuilder/footer-twitter.png" border="0" alt="Twitter"/></a> &nbsp; &nbsp;
								<a href="https://www.instagram.com/americantechnionsociety"><img width="21px" height="19px" src="https://secure2.convio.net/ats/images/content/pagebuilder/footer-instagram.png" border="0" alt="Instagram"/></a>
							</td>
						</tr>
					</tbody>
				</table>
			</td>
		</tr>
	</tbody>
</table>
<!-- END OF SHARE SECTION -->

```

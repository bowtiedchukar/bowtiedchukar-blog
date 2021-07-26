---
title: 10 Steps to Create a BowTied Animal
date: "2021-07-24T22:12:03.284Z"
description: "The BowTied Chukar is joining the jungle!  Here are the 10 steps we took to create BowTied Chukar with strong privacy and security options."
---
**Welcome avatar!**. The BowTied Chukar is joining the jungle.  We're going to be writing about web development, Bitcoin, privacy, and our journey learning how to sell online.  Here are the 10 steps we took to create BowTied Chukar with strong privacy and security options.

### 1. Check Twitter availability

Check to make sure your favorite BowTied animal is available on [Twitter](https://twitter.com).

### 2. Sign up for ProtonMail

Create a free [ProtonMail](https://protonmail.com/) email account for your BowTied animal.

Set up two-factor authentication (2FA) with Authy, ProtonMail instructions [here](https://protonmail.com/support/knowledge-base/two-factor-authentication/).  Save your 2FA backup codes in a password manager like [Bitwarden](https://bitwarden.com/).

### 3. Create BowTied Twitter account

Sign up for a Twitter account using your ProtonMail email address.

At some point, you may be asked to verify your phone number. You can use [Text Verified](https://www.textverified.com) to get a one time use phone number for SMS verification if don't want to provide your real mobile phone number.

Another option is to create a [MySudo](https://mysudo.com/) VOIP number to use with your BowtTied pseudonym.

Set up two-factor authentication (2FA) with Authy, Twitter instructions [here](https://help.twitter.com/en/managing-your-account/two-factor-authentication).

### 4. Create BowTied avatar

We used [PIXL R](https://pixlr.com/x/), a free online photo editor, to put a bow tie on our chukar.  Add your avatar to your Twitter account.

### 5. Buy your BowTied domain

Go to [Namecheap](https://namecheap.com) and buy `yourbowtiedanimal.com`.  It's a good idea to buy your domain now even if you are going to use [Substack](https://substack.com/) or another hosted service where you don't need your own domain.

Namecheap is not going to verify your name, address, and phone number so it is up to you to decide the accuracy of that information.  Use your MySudo VOIP number if you have one.

You can purchase your domain with Bitcoin.  We like using [Strike](https://strike.me/) to pay Bitcoin and Lightning invoices.  It comes out of my US Token account and I don't have to touch my Bitcoin cold storage.

Set up two-factor authentication (2FA) with Authy, Namecheap instructions [here](https://www.namecheap.com/support/knowledgebase/article.aspx/10073/45/how-can-i-use-the-totp-method-for-twofactor-authentication/).

*[Steps 6-10 will guide you through creating your blog using the static site generator [Gatsby](https://www.gatsbyjs.com/) and deploying on [Netlify](https://www.netlify.com).   For a more simple solution, use [Substack](https://substack.com/) or [Wordpress](https://wordpress.com/create-blog/). If you choose these options, you can skip down to writing your first blog post in step 10.]*

### 6. Create BowTied Github account

Sign up for a [GitHub](https://github.com/) account using your ProtonMail email address.

We ran into an unexpected issue when we [set up SSH for authentication](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) on our new account.  If you already use SSH for another GitHub account, you will get an [error that your SSH key is already in use](https://docs.github.com/en/github/authenticating-to-github/troubleshooting-ssh/error-key-already-in-use).

You want to create new SSH identity associated with your BowTied email address.
Follow [these instructions](https://coderwall.com/p/7smjkq/multiple-ssh-keys-for-different-accounts-on-github-or-gitlab) to create a new SSH identity and update your `.ssh/config`.  Then update the hostname when creating or cloning your repo following the instructions [here](https://stackoverflow.com/a/38454037).

Set up two-factor authentication (2FA) with Authy, GitHub instructions [here](https://docs.github.com/en/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa).

### 7. Update local git config

You don't want to leak your regular email address when you push commits to GitHub.

You can create a folder to hold all of your BowTied animal projects and set up a local git config file to use your BowTied Animal ProtonMail email address for commits in these folders.

Update Global config `~/.gitconfig`:

```
[user]
    name = John Doe
    email = john@doe.com

[includeIf "gitdir:~/bowtiedanimal/"]
    path = ~/bowtiedanimal/.gitconfig
```

Add BowTied Animal specific config `~/bowtiedanimal/.gitconfig`:

```
[user]
    name = BowTied Animal
    email = bowtiedanimal@protonmail.com
```

Reference:  [Can I specify multiple users for myself in gitconfig?](https://stackoverflow.com/questions/4220416/can-i-specify-multiple-users-for-myself-in-gitconfig/43654115#43654115)


### 8. Create and deploy blog

We used [Gatsby](https://www.gatsbyjs.com/)  because we're familiar with JavaScript.  [Hugo](https://gohugo.io/) and [Jekyll](https://jekyllrb.com/) are options if you are more comfortable with Go or Ruby.

We want to have full control over our site, but we also don't want to spend a lot of time building and styling the blog from scratch.

We're going to use the [gatsby starter blog](https://github.com/gatsbyjs/gatsby-starter-blog.git) with all of the default styles and site organization.

An advantage of using a more established static site generator is there are plenty of blog posts already written about how to use it.

Use the [Step By Step Guide to Deploy Gatsby on Netlify](https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/) to create your Gatsby project and deploy it to Netlify with one exception we cover below.

Gatsby provides a bunch of different [templates](https://www.gatsbyjs.com/starters/?) for your site.  By default `gatsby new` uses the [Gatsby Default Starter](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-default/) template.

If you want to choose a different template (e.g. [Gatsby Starter Blog](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-blog/)) change the following:

```
gatsby new gatsbynetlify
```
to
```
gatsby new bowtiedanimal-blog https://github.com/gatsbyjs/gatsby-starter-blog
```

### 9. Set up custom domain

Now your site should be deployed to a Netlify address (e.g. https://a-bunch-of-words.netlify.com).

Use the [Setting Up Domain with Namecheap & Netlify](https://dev.to/easybuoy/setting-up-domain-with-namecheap-netlify-1a4d) guide to connect your custom BowTied animal domain and your blog on Netlify.  It may take some time to update your DNS and provision your SSL certificate.

Your blog is now up on your BowTied animal custom domain.

### 10. Update Gatsby template with your info

You have deployed your blog with the default sample content and now it is time to update the site with your information and your first blog post.

You want to update the following files with your information:

* `gatsby-config.js`: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description.  Make sure to update the `gatsby-plugin-manifest` with your BowTied animal icon, see [Add a Custom Icon to your Gatsby Site in Minutes](https://medium.com/@itguymax/add-a-custom-icon-to-your-gatsby-site-in-just-a-few-a-minute-4e5b5f12ca40).
* `src/images/profile-pic.png`:  Replace this file with your avatar.
* `src/components/bio.js`: The info in this file is used in your main site page header and in the footer of each blog post. Some info is pulled from `gatsby-config.js`.
* `content/blog`: Use the three sample posts to understand how to format your blog posts.  Then delete them and add your first post.

Congratulations, you've created your own BowTied animal!  Now you're all set to join the Jungle!  #WAGMI

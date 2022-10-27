"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[1477],{30010:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2022/07/01/feature-flags-devobs-podcast","metadata":{"permalink":"/blog/2022/07/01/feature-flags-devobs-podcast","editUrl":"https://github.com/thomaspoignant/go-feature-flag/tree/main/packages/create-docusaurus/templates/shared/blog/2022-07-01-feature-flags-devobs-podcast/index.md","source":"@site/blog/2022-07-01-feature-flags-devobs-podcast/index.md","title":"\ud83d\udd0a Feature Flags in Dev\u2019Obs Podcast \ud83c\uddeb\ud83c\uddf7","description":"Earlier this week the super cool podcast Dev\u2019Obs asked me to talk about feature flags, go-feature-flag and also the super nice initiative Open-feature.","date":"2022-07-01T00:00:00.000Z","formattedDate":"July 1, 2022","tags":[{"label":"GO Feature Flag","permalink":"/blog/tags/go-feature-flag"},{"label":"Openfeature","permalink":"/blog/tags/openfeature"},{"label":"Podcast","permalink":"/blog/tags/podcast"}],"readingTime":0.35,"hasTruncateMarker":false,"authors":[{"name":"Thomas Poignant","title":"GO Feature Flag owner","url":"https://github.com/thomaspoignant","imageURL":"https://github.com/thomaspoignant.png","key":"thomaspoignant"}],"frontMatter":{"title":"\ud83d\udd0a Feature Flags in Dev\u2019Obs Podcast \ud83c\uddeb\ud83c\uddf7","authors":["thomaspoignant"],"tags":["GO Feature Flag","Openfeature","Podcast"]},"nextItem":{"title":"Automate Your Product Release Cycles Using Go Feature Flag","permalink":"/blog/automate-your-product-release-cycles-using-go-feature-flag"}},"content":"![](./devobs.jpg)\\n\\nEarlier this week the super cool podcast Dev\u2019Obs asked me to talk about feature flags, go-feature-flag and also the super nice initiative Open-feature.\\n\\nThe podcast is in French \ud83c\uddeb\ud83c\uddf7 (yes I know sorry\u2026) but you can learn a lot of cool things, when to use them, what is Open-feature about and all the cool things that the feature flags can bring to your developer experience.\\n\\nListen it here: https://www.listennotes.com/podcasts/devobs/devobs-24-feature-flags-rknRoFGL7N5/"},{"id":"automate-your-product-release-cycles-using-go-feature-flag","metadata":{"permalink":"/blog/automate-your-product-release-cycles-using-go-feature-flag","editUrl":"https://github.com/thomaspoignant/go-feature-flag/tree/main/packages/create-docusaurus/templates/shared/blog/2021-05-26-Automate-Your-Product-Release-Cycles-Using-Go-Feature-Flag/index.md","source":"@site/blog/2021-05-26-Automate-Your-Product-Release-Cycles-Using-Go-Feature-Flag/index.md","title":"Automate Your Product Release Cycles Using Go Feature Flag","description":"When you build a new feature, orchestrating the actual launch schedule between the Product, Engineering, and Marketing teams can be challenging.","date":"2021-05-26T00:00:00.000Z","formattedDate":"May 26, 2021","tags":[{"label":"GO Feature Flag","permalink":"/blog/tags/go-feature-flag"},{"label":"v0.x.x","permalink":"/blog/tags/v-0-x-x"}],"readingTime":4.42,"hasTruncateMarker":true,"authors":[{"name":"Thomas Poignant","title":"GO Feature Flag owner","url":"https://github.com/thomaspoignant","imageURL":"https://github.com/thomaspoignant.png","key":"thomaspoignant"}],"frontMatter":{"slug":"automate-your-product-release-cycles-using-go-feature-flag","title":"Automate Your Product Release Cycles Using Go Feature Flag","authors":["thomaspoignant"],"tags":["GO Feature Flag","v0.x.x"]},"prevItem":{"title":"\ud83d\udd0a Feature Flags in Dev\u2019Obs Podcast \ud83c\uddeb\ud83c\uddf7","permalink":"/blog/2022/07/01/feature-flags-devobs-podcast"},"nextItem":{"title":"Introduction blog post","permalink":"/blog/introduction-blog-post"}},"content":"![](./head.jpg)\\n\\nWhen you build a new feature, orchestrating the actual launch schedule between the Product, Engineering, and Marketing teams can be challenging.\\n\\nWhile it seems easy to launch something new, a poorly executed rollout can end up being your worst nightmare.\\n\\nIn this article, I will present to you how to use the Go module go-feature-flag to roll out your new features smoothly and help you be confident during the rollout phase. If you are not familiar with the concept of feature flags or feature toggles, I encourage you to read this [article by Martin Fowler](https://www.martinfowler.com/articles/feature-toggles.html).\\n\\ngo-feature-flag is a Go module to easily manage your flags. You can refer to this article I wrote a few months ago to understand how it works.\\n\x3c!-- truncate --\x3e\\n\\n---\\n\\n## How To Use go-feature-flag\\n\\nThe library is super simple to use:\\n\\n1. Install the module:\\n```go\\ngo get github.com/thomaspoignant/go-feature-flag\\n```\\n\\n2. Init the client with the location of your configuration file for your flags:\\n\\n```go\\nerr := ffclient.Init(ffclient.Config{\\n    PollInterval: 60,\\n    Retriever: &ffclient.HTTPRetriever{\\n        URL:    \\"http://example.com/flag-config.yaml\\",\\n    },\\n})\\ndefer ffclient.Close()\\n```\\n\\n3. Put your new features conditionally based on the flag value:\\n\\n```go\\nuser := ffuser.NewUser(\\"user-unique-key\\")\\nhasFlag, _ := ffclient.BoolVariation(\\"test-flag\\", user, false)\\nif hasFlag {\\n    // flag \\"test-flag\\" is true for the user\\n} else {\\n    // flag \\"test-flag\\" is false for the user\\n}\\n```\\n\\nYou can have way more configuration, but I\u2019ll let you check the [documentation](https://thomaspoignant.github.io/go-feature-flag/) for that.\\n\\n---\\n\\n## Progressive Rollout\\n\\nWhen you release a new feature that can have a strong impact on your system, you probably don\u2019t want to go all-in with this new feature for all your users.\\n\\nFor example, you are deploying something that can be CPU-consuming and you want to have time to check if your servers handle it correctly. This is typically a great use case for a progressive rollout.\\n\\nIt progressively increases how many users are impacted by your feature flag to avoid a big-bang rollout for all your users at once. During that time, it allows you to monitor your system and be confident that your infrastructure can handle this new load.\\n\\n```yaml\\nprogressive-flag:\\n  true: true\\n  false: false\\n  default: false\\n  rollout:\\n    progressive:\\n      percentage:\\n        initial: 0\\n        end: 100\\n      releaseRamp:\\n        start: 2021-03-20T00:00:00.10-05:00\\n        end: 2021-03-21T00:00:00.10-05:00\\n```\\n\\nTo do that in go-feature-flag, you will configure your flag like in the example above. You set up a progressive rollout with an initial percentage value and a release ramp. Over time, more and more users can be affected by the flag and will have the new feature.\\n\\nDepending on how critical this feature is, you can have a long or a short release ramp. If something goes wrong, you can edit your flag to stop the rollout at any time.\\n\\n---\\n\\n## Scheduling Workflows\\n\\nScheduling introduces the ability for users to change their flags for future points in time. While this sounds deceptively straightforward, it unlocks the potential for users to create complex release strategies by scheduling the incremental steps in advance.\\n\\nFor example, you may want to turn a feature on for internal testing tomorrow and then enable it for your \u201cbeta\u201d user segment four days later.\\n\\n```yaml\\nscheduled-flag:\\n  true: true\\n  false: false\\n  default: false\\n  percentage: 0\\n  rollout:\\n    scheduled:\\n      steps:\\n        - date: 2020-04-10T00:00:00.00+02:00\\n          rule: internal eq true\\n          percentage: 100        - date: 2020-04-14T00:00:00.00+02:00\\n          rule: internal eq true and beta eq true        - date: 2020-04-18T00:00:00.00+02:00\\n          rule: \\"\\"\\n```\\n\\nIn this example, you can see that we are updating the flag multiple times to perform actions in the future. Let\u2019s detail what will happen in this configuration:\\n\\n1. Before `2020\u201304\u201310`, the flag is not served.\\n2. After the first update of the flag (`2020\u201304\u201310`), we have 100% of the internal users who received the flag as true.\\n3. Four days later, we add the users who have a `bet`a flag as `true`.\\n4. Finally, four days later, we open the feature to all users.\\n\\nAs you can see, this is really powerful because your release management is now ready without doing any manual deployment/action, and this scheduling can be done by a non-technical user (aka your product manager).\\n\\n---\\n\\n## Experimentation Rollout\\n\\nSometimes you also want to experiment, collect the data, and decide later if you want to roll out the feature to all your users.\\n\\nTo do that correctly, you can configure your flag with a start date and an end date for a subset of your users.\\n\\n```yaml\\nexperimentation-flag:\\n  percentage: 50\\n  true: true\\n  false: false\\n  default: false\\n  rule: userId sw \\"9\\"\\n  rollout:\\n    experimentation:\\n      start: 2021-03-20T00:00:00.10-05:00\\n      end: 2021-03-21T00:00:00.10-05:00\\n```\\n\\nIn this example, 50% of your users with a userId that starts with 9 will be impacted by the flag between the start and the end dates of the experimentation.\\n\\nWith the module, you can also collect the data of your variation (see the [documentation](https://thomaspoignant.github.io/go-feature-flag/data_collection/) for more info) to join them with the data of what you are testing.\\n\\nSo you can see the results of your experimentation and decide whether you want to roll out this flag for real or not.\\n\\n---\\n\\n## Conclusion\\n\\nUsing feature flags really is a great thing, but it becomes even better if you use some advanced rollout strategies.\\n\\nIf you start using them, you will love it because you decouple the deployment and the release and you can have fine-grained control over what your users can do."},{"id":"introduction-blog-post","metadata":{"permalink":"/blog/introduction-blog-post","editUrl":"https://github.com/thomaspoignant/go-feature-flag/tree/main/packages/create-docusaurus/templates/shared/blog/2021-01-11-introduction-blog-post/index.md","source":"@site/blog/2021-01-11-introduction-blog-post/index.md","title":"Introduction blog post","description":"I absolutely don\u2019t think human/manual QA gates should be involved in between the writing of code and its being live. To avoid breaking things every time and to have an early cutoff system, you should use feature flags.","date":"2021-01-11T00:00:00.000Z","formattedDate":"January 11, 2021","tags":[{"label":"GO Feature Flag","permalink":"/blog/tags/go-feature-flag"},{"label":"v0.x.x","permalink":"/blog/tags/v-0-x-x"}],"readingTime":4.035,"hasTruncateMarker":true,"authors":[{"name":"Thomas Poignant","title":"GO Feature Flag owner","url":"https://github.com/thomaspoignant","imageURL":"https://github.com/thomaspoignant.png","key":"thomaspoignant"}],"frontMatter":{"slug":"introduction-blog-post","title":"Introduction blog post","authors":["thomaspoignant"],"tags":["GO Feature Flag","v0.x.x"]},"prevItem":{"title":"Automate Your Product Release Cycles Using Go Feature Flag","permalink":"/blog/automate-your-product-release-cycles-using-go-feature-flag"}},"content":"<center>\\n\\n  ![](./logo.png)\\n  \\n</center>\\n\\nI absolutely don\u2019t think human/manual QA gates should be involved in between the writing of code and its being live. To avoid breaking things every time and to have an early cutoff system, you should use feature flags.\\n\\nThere are a lot of systems available on the market to manage your flags, like [LaunchDarkly](https://launchdarkly.com/) or [UNLEASH](https://unleash.org/), that have Golang support \u2014 but this option is expensive, and you have to host a server somewhere to manage your flags.\\n\\nFrom this starting point, I came up with the idea to create a simple library with only one file in the back end. This file can be stored in different places (AWS S3, GitHub, an HTTP endpoint somewhere, etc.). This is the only thing you have to host \u2014 all the decision logic stands inside the Go module.\\n\\n\x3c!-- truncate --\x3e\\n\\n---\\n\\n## Why a new solution?\\n\\nThere are some solutions available for Go to manage feature flags. I can classify them into two categories:\\n\\n- You need to run a specific service: [markphelps/flipt](https://github.com/markphelps/flipt), [checkr/flagr](https://github.com/checkr/flagr), [Unleash/unleash](https://github.com/Unleash/unleash), [vsco/dcdr](https://github.com/vsco/dcdr), etc.\\n- You need to have a database: [xchapter7x/toggle](https://github.com/xchapter7x/toggle), [AntoineAugusti/feature-flags](https://github.com/AntoineAugusti/feature-flags), etc.\\n\\nAll of these solutions are great and have a lot of features, but I was a bit worried about having a full setup with things to install before doing feature flags on a basic service.\\n\\nI don\u2019t want to host/maintain/monitor a full feature-flag system if my needs are really small.\\n\\nSo I decided to make go-feature-flag, a simple and easy-to-implement feature-flag system, with no back end at all except a shared configuration file you can store anywhere (S3, GitHub, HTTP endpoint, etc.).\\n\\nThe goal is to experience the usage of feature flags without a complex solution, and if you end up liking it and need a more advanced pattern, you can go to any open-source solution or SaaS solution \u2014 like LaunchDarkly, for example.\\n\\n--- \\n\\n## How Does It Work?\\n\\nHow this Go module works is easy. It just reads the shared file every x seconds and gives you a way to get the value of your flag in the type you expect.\\n\\n![](./sdk-explanation.jpg)\\n\\nAs you can see, what go-feature-flag is providing is a way for you to keep in sync with the feature-flag config file. It also allows you to evaluate the flag for your users.\\n\\nA rule system based on [nikunjy/rules](https://github.com/nikunjy/rules) allows you to specify complex rules to apply the flag only for a subset of your users.\\n\\nThe percentage allows you to select which percentage of users will get the true value, but I\u2019m sure you wonder how the repartition is done. It\u2019s really easy \u2014 we\u2019re doing a hash of the key of the user with the flag name used as a salt (it guarantees that the repartition isn\u2019t always to the same users).\\n\\n![](./code.png)\\n\\n---\\n\\n## How to Use It\\n\\nThe main goal of go-feature-flag is to be super simple so you don\u2019t have much to do in order to use it.\\n\\n- The first thing to do is host your config file somewhere (S3, GitHub, etc.)\\n- During app initialization, init go-feature-flag with a configuration:\\n\\n```go\\nerr := ffclient.Init(ffclient.Config{\\n    PollInterval: 3,\\n    Retriever: &ffClient.HTTPRetriever{\\n        URL:    \\"https://raw.githubusercontent.com/thomaspoignant/go-feature-flag/main/testdata/test.yaml\\",\\n    },\\n})\\ndefer ffclient.Close()\\n```\\n\\n- Now that you\u2019ve done an init on go-feature-flag, you can see the value of the flag for your users, with something like this:\\n\\n```go\\nuser := ffuser.NewUser(\\"user-unique-key\\")\\nhasFlag, _ := ffclient.BoolVariation(\\"test-flag\\", user, false)\\nif hasFlag {\\n    // flag \\"test-flag\\" is true for the user\\n} else {\\n    // flag \\"test-flag\\" is false for the user\\n}\\n```\\n\\n**Note**: Your variation will return the default value (the last parameter) if you have an error (flag not present, wrong type, etc.).\\n\\n- It\u2019s a basic example, but you can put as many properties as you want for your User to make complex queries on your flag\\n\\n```go\\nuser = ffuser.NewUserBuilder(\\"user-unique-key\\").\\n AddCustom(\\"firstname\\", \\"John\\").\\n AddCustom(\\"lastname\\", \\"Doe\\").\\n AddCustom(\\"email\\", \\"john.doe@example.com\\").\\n Build()\\n```\\n\\nThis allows you to have a rule like `email eq \\"john.doe@example.com\\"` to select a specific user with your flag.\\n\\n--- \\n\\n## What\u2019s Next?\\nAs you can see go-feature-flag is simple, and the goal is to keep it as simple as possible. But this doesn\u2019t mean it\u2019s finished.\\n\\nFor now, I see an evolutionary path for go-feature-flag: First, it should be able to store the flag config file anywhere, so we have to support more retrievers. The second thing is to get more feedback. For now, we\u2019re logging some stuff, but maybe some users would like to have a webhook or Slack notification.\\n\\ngo-feature-flag is also open to contribution, so if you want to contribute any ideas or help, I\u2019d really love to hear from you concerning what you think about this library and what you want in it.\\n\\nSo feel free to write [a discussion](https://github.com/thomaspoignant/go-feature-flag/discussions) on GitHub, open an [issue](https://github.com/thomaspoignant/go-feature-flag/issues), or send me an [email](mailto:contact@gofeatureflag.org)."}]}')}}]);
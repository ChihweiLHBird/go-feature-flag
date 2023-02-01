"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[1477],{30010:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2023/02/01/introducing-v1.0.0","metadata":{"permalink":"/blog/2023/02/01/introducing-v1.0.0","editUrl":"https://github.com/thomaspoignant/go-feature-flag/tree/main/packages/create-docusaurus/templates/shared/blog/2023-02-01-introducing-v1.0.0/index.md","source":"@site/blog/2023-02-01-introducing-v1.0.0/index.md","title":"\ud83d\ude80 Announcing GO Feature Flag v1.0.0","description":"GO Feature Flag logo","date":"2023-02-01T00:00:00.000Z","formattedDate":"February 1, 2023","tags":[{"label":"GO Feature Flag","permalink":"/blog/tags/go-feature-flag"},{"label":"Open Feature","permalink":"/blog/tags/open-feature"},{"label":"release","permalink":"/blog/tags/release"}],"readingTime":4.895,"hasTruncateMarker":true,"authors":[{"name":"Thomas Poignant","title":"GO Feature Flag owner","url":"https://github.com/thomaspoignant","imageURL":"https://github.com/thomaspoignant.png","key":"thomaspoignant"}],"frontMatter":{"title":"\ud83d\ude80 Announcing GO Feature Flag v1.0.0","authors":["thomaspoignant"],"tags":["GO Feature Flag","Open Feature","release"]},"nextItem":{"title":"\ud83d\udd0a Feature Flags in Dev\u2019Obs Podcast \ud83c\uddeb\ud83c\uddf7","permalink":"/blog/2022/07/01/feature-flags-devobs-podcast"}},"content":"![GO Feature Flag logo](banner.png)\\n\\n# \ud83d\ude80 Announcing GO Feature Flag v1.0.0, get more from your feature flags\\n\\nWe are so happy to finally announce that **GO Feature Flag** v1.0.0 is released. \ud83c\udf89 \ud83e\udd73 \ud83d\ude80\\n\\nIt was a long journey before this release but we are happy to propose you an even better experience with feature flags always keeping simplicity in mind and building a lightweight solution.\\n\\nOur goal is still the same, we want you to experience the world of feature flags with a lightweight self-hosted solution.\\n\\nWith this new version you will now be able to enhance your usage of feature flagging with opening the creation of more complex and more advance toggles.\\n\x3c!-- truncate --\x3e\\n\\n# What is changing?\\n\\n## Flag configuration format\\n\\nThe main change is the format of your flags configuration. \\n\\nAfter using the version `v0.x.x` for quite some time we notice some limitation on the way our flag configuration was designed.\\nIt was hard to return more than 2 different values with the same flag and we wanted to find a better way to represent our flags to be more extensible.\\n\\nThe new representation of the flag is a bit more verbose but allows a lot more possibility in the long term, being able to create more advanced flag.\\n\\n**Old format:**\\n\\nIn the previous versions the flag representation was looking like this:\\n\\n```yaml\\ntest-flag:\\n  rule: key eq \\"random-key\\"\\n  percentage: 40\\n  true: true\\n  false: false\\n  default: false\\n```\\n\\nAs you can see on this example you can only have a value for the `true` variation and for the `false` variation, the `default`variation was applying if the user was not part of the `rule`.\\n\\n**New format:**\\n\\nThe same flag in the new format will looks like this:\\n\\n```yaml\\ntest-flag:\\n  variations:\\n    variation_A: true\\n    variation_B: false\\n  targeting:\\n    - query: key eq \\"random-key\\"\\n      percentage:\\n        variation_B: 60\\n        variation_A: 40\\n  defaultRule:\\n    variation: variation_B\\n```\\n\\nWith the new format you have an unlimited number of variation possible you can define but also more than one rule for a specific flag.\\n\\nIt allows to target different types of users with different values for the same feature flag.\\n\\nLet\u2019s take a real life example, we want to get the background color for our website based on this criterias:\\n\\n- `pro` users should have a red background\\n- `enterprise` users should have a green background\\n- **40%** of the `free` users should have a **grey** background and **60%** a **yellow** background\\n- **other types** of user have a white background\\n\\nWe can come-up with a flag, the configuration will look like this:\\n\\n```yaml\\nuser-background-color:\\n  variations:\\n    pro: #ff1f00\\n    enterprise: #114f03\\n    free_grey: #b0b3af\\n    free_yellow: #ecec0a\\n    default: #ffffff\\n  targeting:\\n    - query: type eq \\"pro\\"\\n      variation: pro\\n    - query: type eq \\"enterprise\\"\\n      variation: enterprise\\n    - query: type eq \\"free\\"\\n      percentage:\\n        free_grey: 40\\n        free_yellow: 60\\n  defaultRule:\\n    variation: default\\n```\\n\\nAs you can see we can have a way more advanced flag configuration with this new format. This format is solving all the limitation we had with the version `v0.x.x` of **GO Feature Flag**.\\n\\n### Migrate from v0.x.x to v1.x.x\\n\\nFirst of all you should know that all flags from the version `v0.x.x` are still compatible with this new version of **GO Feature Flag**. We made it possible to reduce the disagreement to have to convert all your flag directly.\\n\\n**BUT** we encourage you to migrate your flag to the new version and for this we have created a tool called `go-feature-flag-migration-cli` to convert flags in `v0.x.x` format to `v1.0.0` format.\\n\\nThe easiest way to use it is probably to use our docker image like this:\\n\\n```bash\\ndocker run \\\\\\n  -v $(pwd)/your/configuration_folder:/config \\\\\\n  thomaspoignant/go-feature-flag-migration-cli:latest \\\\\\n  --input-format=yaml \\\\\\n  --input-file=/config/my-go-feature-flag-config-v0.x.x.yaml \\\\\\n  --output-format=yaml \\\\\\n  --output-file=/config/my-go-feature-flag-config-v1.x.x.yaml\\n```\\n\\n## Documentation\\n\\nWe use the opportunity of the `v1.0.0` to revamp our documentation and to highlight how you can use **GO Feature Flag** in 2 different modes.\\n\\n- **The GO module**, this is where we started and this is the core of what we propose. In the documentation you will find all the information on how to use the module into your GO project.\\n- Using **Open-Feature**, the new open-source vendor agnostic standard for feature flags. You can use the `relay-proxy` our server component that allows to use **GO Feature Flag** with multiple languages *(for now we support `javascript`, `typescript`, `java`, `GO` and `.Net`)*. In the documentation you will find how to use the **GO Feature Flag providers** in combination with the **Open Feature SDKs**.\\n\\n## Flag Editor\\n\\nOur old flag editor was not compatible anymore with the new `v1.0.0` flag format. \\n\\nSo we decided to restart our flag editor from scratch and to allow the possibility to create flags configuration from a simple UI. \\n\\n![Kapture 2023-01-20 at 16.16.50.gif](flag_editor.gif)\\n\\nFor now it is a tiny UI that make your life easier, but the goal is to evolve it more and more to be the place where you want to go to build your new feature flags.\\n\\n# What has not changed?\\n\\nYes a lot of things have changed but our internals are solids and we have ensure to be consistent with the previous versions.\\n\\nOur main points of attention where the following:\\n\\n- User segmentation is similar between `v0.x.x` and `v1.0.0` meaning that if a user was affected by a flag (in a percentage for example) he will continue to be in the same cohort.\\n- All `retrievers` and data `exporters` have not changed and are still working exactly the same way as before.\\n- You can continue using **GO Feature Flags** with your old flags.\\n- Moving to the version `v1.0.0` is transparent and you just have to change the version.\\n- You can still use our advance rollout capabilities such as **experimentation**, **scheduled rollout**, **progressive rollout \u2026**\\n\\n# Feedback\\n\\nFeedbacks is our only way to evolve GO Feature Flag, so please contact us to give us any feedback.\\n\\n- Via [email](mailto:contact@gofeaturegflag.org)\\n- Via a [GitHub Issue](https://github.com/thomaspoignant/go-feature-flag/issues/new/choose)"},{"id":"/2022/07/01/feature-flags-devobs-podcast","metadata":{"permalink":"/blog/2022/07/01/feature-flags-devobs-podcast","editUrl":"https://github.com/thomaspoignant/go-feature-flag/tree/main/packages/create-docusaurus/templates/shared/blog/2022-07-01-feature-flags-devobs-podcast/index.md","source":"@site/blog/2022-07-01-feature-flags-devobs-podcast/index.md","title":"\ud83d\udd0a Feature Flags in Dev\u2019Obs Podcast \ud83c\uddeb\ud83c\uddf7","description":"Earlier this week the super cool podcast Dev\u2019Obs asked me to talk about feature flags, go-feature-flag and also the super nice initiative OpenFeature.","date":"2022-07-01T00:00:00.000Z","formattedDate":"July 1, 2022","tags":[{"label":"GO Feature Flag","permalink":"/blog/tags/go-feature-flag"},{"label":"Openfeature","permalink":"/blog/tags/openfeature"},{"label":"Podcast","permalink":"/blog/tags/podcast"}],"readingTime":0.35,"hasTruncateMarker":false,"authors":[{"name":"Thomas Poignant","title":"GO Feature Flag owner","url":"https://github.com/thomaspoignant","imageURL":"https://github.com/thomaspoignant.png","key":"thomaspoignant"}],"frontMatter":{"title":"\ud83d\udd0a Feature Flags in Dev\u2019Obs Podcast \ud83c\uddeb\ud83c\uddf7","authors":["thomaspoignant"],"tags":["GO Feature Flag","Openfeature","Podcast"]},"prevItem":{"title":"\ud83d\ude80 Announcing GO Feature Flag v1.0.0","permalink":"/blog/2023/02/01/introducing-v1.0.0"},"nextItem":{"title":"Automate Your Product Release Cycles Using Go Feature Flag","permalink":"/blog/automate-your-product-release-cycles-using-go-feature-flag"}},"content":"![](./devobs.jpg)\\n\\nEarlier this week the super cool podcast Dev\u2019Obs asked me to talk about feature flags, go-feature-flag and also the super nice initiative OpenFeature.\\n\\nThe podcast is in French \ud83c\uddeb\ud83c\uddf7 (yes I know sorry\u2026) but you can learn a lot of cool things, when to use them, what is OpenFeature about and all the cool things that the feature flags can bring to your developer experience.\\n\\nListen it here: https://www.listennotes.com/podcasts/devobs/devobs-24-feature-flags-rknRoFGL7N5/"},{"id":"automate-your-product-release-cycles-using-go-feature-flag","metadata":{"permalink":"/blog/automate-your-product-release-cycles-using-go-feature-flag","editUrl":"https://github.com/thomaspoignant/go-feature-flag/tree/main/packages/create-docusaurus/templates/shared/blog/2021-05-26-Automate-Your-Product-Release-Cycles-Using-Go-Feature-Flag/index.md","source":"@site/blog/2021-05-26-Automate-Your-Product-Release-Cycles-Using-Go-Feature-Flag/index.md","title":"Automate Your Product Release Cycles Using Go Feature Flag","description":"When you build a new feature, orchestrating the actual launch schedule between the Product, Engineering, and Marketing teams can be challenging.","date":"2021-05-26T00:00:00.000Z","formattedDate":"May 26, 2021","tags":[{"label":"GO Feature Flag","permalink":"/blog/tags/go-feature-flag"},{"label":"v0.x.x","permalink":"/blog/tags/v-0-x-x"}],"readingTime":4.42,"hasTruncateMarker":true,"authors":[{"name":"Thomas Poignant","title":"GO Feature Flag owner","url":"https://github.com/thomaspoignant","imageURL":"https://github.com/thomaspoignant.png","key":"thomaspoignant"}],"frontMatter":{"slug":"automate-your-product-release-cycles-using-go-feature-flag","title":"Automate Your Product Release Cycles Using Go Feature Flag","authors":["thomaspoignant"],"tags":["GO Feature Flag","v0.x.x"]},"prevItem":{"title":"\ud83d\udd0a Feature Flags in Dev\u2019Obs Podcast \ud83c\uddeb\ud83c\uddf7","permalink":"/blog/2022/07/01/feature-flags-devobs-podcast"},"nextItem":{"title":"Introduction blog post","permalink":"/blog/introduction-blog-post"}},"content":"![](./head.jpg)\\n\\nWhen you build a new feature, orchestrating the actual launch schedule between the Product, Engineering, and Marketing teams can be challenging.\\n\\nWhile it seems easy to launch something new, a poorly executed rollout can end up being your worst nightmare.\\n\\nIn this article, I will present to you how to use the Go module go-feature-flag to roll out your new features smoothly and help you be confident during the rollout phase. If you are not familiar with the concept of feature flags or feature toggles, I encourage you to read this [article by Martin Fowler](https://www.martinfowler.com/articles/feature-toggles.html).\\n\\ngo-feature-flag is a Go module to easily manage your flags. You can refer to this article I wrote a few months ago to understand how it works.\\n\x3c!-- truncate --\x3e\\n\\n---\\n\\n## How To Use go-feature-flag\\n\\nThe library is super simple to use:\\n\\n1. Install the module:\\n```go\\ngo get github.com/thomaspoignant/go-feature-flag\\n```\\n\\n2. Init the client with the location of your configuration file for your flags:\\n\\n```go\\nerr := ffclient.Init(ffclient.Config{\\n    PollInterval: 60,\\n    Retriever: &ffclient.HTTPRetriever{\\n        URL:    \\"http://example.com/flag-config.yaml\\",\\n    },\\n})\\ndefer ffclient.Close()\\n```\\n\\n3. Put your new features conditionally based on the flag value:\\n\\n```go\\nuser := ffuser.NewUser(\\"user-unique-key\\")\\nhasFlag, _ := ffclient.BoolVariation(\\"test-flag\\", user, false)\\nif hasFlag {\\n    // flag \\"test-flag\\" is true for the user\\n} else {\\n    // flag \\"test-flag\\" is false for the user\\n}\\n```\\n\\nYou can have way more configuration, but I\u2019ll let you check the [documentation](https://thomaspoignant.github.io/go-feature-flag/) for that.\\n\\n---\\n\\n## Progressive Rollout\\n\\nWhen you release a new feature that can have a strong impact on your system, you probably don\u2019t want to go all-in with this new feature for all your users.\\n\\nFor example, you are deploying something that can be CPU-consuming and you want to have time to check if your servers handle it correctly. This is typically a great use case for a progressive rollout.\\n\\nIt progressively increases how many users are impacted by your feature flag to avoid a big-bang rollout for all your users at once. During that time, it allows you to monitor your system and be confident that your infrastructure can handle this new load.\\n\\n```yaml\\nprogressive-flag:\\n  true: true\\n  false: false\\n  default: false\\n  rollout:\\n    progressive:\\n      percentage:\\n        initial: 0\\n        end: 100\\n      releaseRamp:\\n        start: 2021-03-20T00:00:00.10-05:00\\n        end: 2021-03-21T00:00:00.10-05:00\\n```\\n\\nTo do that in go-feature-flag, you will configure your flag like in the example above. You set up a progressive rollout with an initial percentage value and a release ramp. Over time, more and more users can be affected by the flag and will have the new feature.\\n\\nDepending on how critical this feature is, you can have a long or a short release ramp. If something goes wrong, you can edit your flag to stop the rollout at any time.\\n\\n---\\n\\n## Scheduling Workflows\\n\\nScheduling introduces the ability for users to change their flags for future points in time. While this sounds deceptively straightforward, it unlocks the potential for users to create complex release strategies by scheduling the incremental steps in advance.\\n\\nFor example, you may want to turn a feature on for internal testing tomorrow and then enable it for your \u201cbeta\u201d user segment four days later.\\n\\n```yaml\\nscheduled-flag:\\n  true: true\\n  false: false\\n  default: false\\n  percentage: 0\\n  rollout:\\n    scheduled:\\n      steps:\\n        - date: 2020-04-10T00:00:00.00+02:00\\n          rule: internal eq true\\n          percentage: 100        - date: 2020-04-14T00:00:00.00+02:00\\n          rule: internal eq true and beta eq true        - date: 2020-04-18T00:00:00.00+02:00\\n          rule: \\"\\"\\n```\\n\\nIn this example, you can see that we are updating the flag multiple times to perform actions in the future. Let\u2019s detail what will happen in this configuration:\\n\\n1. Before `2020\u201304\u201310`, the flag is not served.\\n2. After the first update of the flag (`2020\u201304\u201310`), we have 100% of the internal users who received the flag as true.\\n3. Four days later, we add the users who have a `bet`a flag as `true`.\\n4. Finally, four days later, we open the feature to all users.\\n\\nAs you can see, this is really powerful because your release management is now ready without doing any manual deployment/action, and this scheduling can be done by a non-technical user (aka your product manager).\\n\\n---\\n\\n## Experimentation Rollout\\n\\nSometimes you also want to experiment, collect the data, and decide later if you want to roll out the feature to all your users.\\n\\nTo do that correctly, you can configure your flag with a start date and an end date for a subset of your users.\\n\\n```yaml\\nexperimentation-flag:\\n  percentage: 50\\n  true: true\\n  false: false\\n  default: false\\n  rule: userId sw \\"9\\"\\n  rollout:\\n    experimentation:\\n      start: 2021-03-20T00:00:00.10-05:00\\n      end: 2021-03-21T00:00:00.10-05:00\\n```\\n\\nIn this example, 50% of your users with a userId that starts with 9 will be impacted by the flag between the start and the end dates of the experimentation.\\n\\nWith the module, you can also collect the data of your variation (see the [documentation](https://thomaspoignant.github.io/go-feature-flag/data_collection/) for more info) to join them with the data of what you are testing.\\n\\nSo you can see the results of your experimentation and decide whether you want to roll out this flag for real or not.\\n\\n---\\n\\n## Conclusion\\n\\nUsing feature flags really is a great thing, but it becomes even better if you use some advanced rollout strategies.\\n\\nIf you start using them, you will love it because you decouple the deployment and the release and you can have fine-grained control over what your users can do."},{"id":"introduction-blog-post","metadata":{"permalink":"/blog/introduction-blog-post","editUrl":"https://github.com/thomaspoignant/go-feature-flag/tree/main/packages/create-docusaurus/templates/shared/blog/2021-01-11-introduction-blog-post/index.md","source":"@site/blog/2021-01-11-introduction-blog-post/index.md","title":"Introduction blog post","description":"I absolutely don\u2019t think human/manual QA gates should be involved in between the writing of code and its being live. To avoid breaking things every time and to have an early cutoff system, you should use feature flags.","date":"2021-01-11T00:00:00.000Z","formattedDate":"January 11, 2021","tags":[{"label":"GO Feature Flag","permalink":"/blog/tags/go-feature-flag"},{"label":"v0.x.x","permalink":"/blog/tags/v-0-x-x"}],"readingTime":4.035,"hasTruncateMarker":true,"authors":[{"name":"Thomas Poignant","title":"GO Feature Flag owner","url":"https://github.com/thomaspoignant","imageURL":"https://github.com/thomaspoignant.png","key":"thomaspoignant"}],"frontMatter":{"slug":"introduction-blog-post","title":"Introduction blog post","authors":["thomaspoignant"],"tags":["GO Feature Flag","v0.x.x"]},"prevItem":{"title":"Automate Your Product Release Cycles Using Go Feature Flag","permalink":"/blog/automate-your-product-release-cycles-using-go-feature-flag"}},"content":"<center>\\n\\n  ![](./logo.png)\\n  \\n</center>\\n\\nI absolutely don\u2019t think human/manual QA gates should be involved in between the writing of code and its being live. To avoid breaking things every time and to have an early cutoff system, you should use feature flags.\\n\\nThere are a lot of systems available on the market to manage your flags, like [LaunchDarkly](https://launchdarkly.com/) or [UNLEASH](https://unleash.org/), that have Golang support \u2014 but this option is expensive, and you have to host a server somewhere to manage your flags.\\n\\nFrom this starting point, I came up with the idea to create a simple library with only one file in the back end. This file can be stored in different places (AWS S3, GitHub, an HTTP endpoint somewhere, etc.). This is the only thing you have to host \u2014 all the decision logic stands inside the Go module.\\n\\n\x3c!-- truncate --\x3e\\n\\n---\\n\\n## Why a new solution?\\n\\nThere are some solutions available for Go to manage feature flags. I can classify them into two categories:\\n\\n- You need to run a specific service: [markphelps/flipt](https://github.com/markphelps/flipt), [checkr/flagr](https://github.com/checkr/flagr), [Unleash/unleash](https://github.com/Unleash/unleash), [vsco/dcdr](https://github.com/vsco/dcdr), etc.\\n- You need to have a database: [xchapter7x/toggle](https://github.com/xchapter7x/toggle), [AntoineAugusti/feature-flags](https://github.com/AntoineAugusti/feature-flags), etc.\\n\\nAll of these solutions are great and have a lot of features, but I was a bit worried about having a full setup with things to install before doing feature flags on a basic service.\\n\\nI don\u2019t want to host/maintain/monitor a full feature-flag system if my needs are really small.\\n\\nSo I decided to make go-feature-flag, a simple and easy-to-implement feature-flag system, with no back end at all except a shared configuration file you can store anywhere (S3, GitHub, HTTP endpoint, etc.).\\n\\nThe goal is to experience the usage of feature flags without a complex solution, and if you end up liking it and need a more advanced pattern, you can go to any open-source solution or SaaS solution \u2014 like LaunchDarkly, for example.\\n\\n--- \\n\\n## How Does It Work?\\n\\nHow this Go module works is easy. It just reads the shared file every x seconds and gives you a way to get the value of your flag in the type you expect.\\n\\n![](./sdk-explanation.jpg)\\n\\nAs you can see, what go-feature-flag is providing is a way for you to keep in sync with the feature-flag config file. It also allows you to evaluate the flag for your users.\\n\\nA rule system based on [nikunjy/rules](https://github.com/nikunjy/rules) allows you to specify complex rules to apply the flag only for a subset of your users.\\n\\nThe percentage allows you to select which percentage of users will get the true value, but I\u2019m sure you wonder how the repartition is done. It\u2019s really easy \u2014 we\u2019re doing a hash of the key of the user with the flag name used as a salt (it guarantees that the repartition isn\u2019t always to the same users).\\n\\n![](./code.png)\\n\\n---\\n\\n## How to Use It\\n\\nThe main goal of go-feature-flag is to be super simple so you don\u2019t have much to do in order to use it.\\n\\n- The first thing to do is host your config file somewhere (S3, GitHub, etc.)\\n- During app initialization, init go-feature-flag with a configuration:\\n\\n```go\\nerr := ffclient.Init(ffclient.Config{\\n    PollInterval: 3,\\n    Retriever: &ffClient.HTTPRetriever{\\n        URL:    \\"https://raw.githubusercontent.com/thomaspoignant/go-feature-flag/main/testdata/test.yaml\\",\\n    },\\n})\\ndefer ffclient.Close()\\n```\\n\\n- Now that you\u2019ve done an init on go-feature-flag, you can see the value of the flag for your users, with something like this:\\n\\n```go\\nuser := ffuser.NewUser(\\"user-unique-key\\")\\nhasFlag, _ := ffclient.BoolVariation(\\"test-flag\\", user, false)\\nif hasFlag {\\n    // flag \\"test-flag\\" is true for the user\\n} else {\\n    // flag \\"test-flag\\" is false for the user\\n}\\n```\\n\\n**Note**: Your variation will return the default value (the last parameter) if you have an error (flag not present, wrong type, etc.).\\n\\n- It\u2019s a basic example, but you can put as many properties as you want for your User to make complex queries on your flag\\n\\n```go\\nuser = ffuser.NewUserBuilder(\\"user-unique-key\\").\\n AddCustom(\\"firstname\\", \\"John\\").\\n AddCustom(\\"lastname\\", \\"Doe\\").\\n AddCustom(\\"email\\", \\"john.doe@example.com\\").\\n Build()\\n```\\n\\nThis allows you to have a rule like `email eq \\"john.doe@example.com\\"` to select a specific user with your flag.\\n\\n--- \\n\\n## What\u2019s Next?\\nAs you can see go-feature-flag is simple, and the goal is to keep it as simple as possible. But this doesn\u2019t mean it\u2019s finished.\\n\\nFor now, I see an evolutionary path for go-feature-flag: First, it should be able to store the flag config file anywhere, so we have to support more retrievers. The second thing is to get more feedback. For now, we\u2019re logging some stuff, but maybe some users would like to have a webhook or Slack notification.\\n\\ngo-feature-flag is also open to contribution, so if you want to contribute any ideas or help, I\u2019d really love to hear from you concerning what you think about this library and what you want in it.\\n\\nSo feel free to write [a discussion](https://github.com/thomaspoignant/go-feature-flag/discussions) on GitHub, open an [issue](https://github.com/thomaspoignant/go-feature-flag/issues), or send me an [email](mailto:contact@gofeatureflag.org)."}]}')}}]);
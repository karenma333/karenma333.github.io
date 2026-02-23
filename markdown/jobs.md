<!doctype html>
<html lang="en">
<head>
		<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-102079523-1"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());
	  gtag('config', 'UA-102079523-1');
	</script>
	<title>Karen Ma - Portfolio</title>	
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="./public/css/portfolio.css" rel="stylesheet">
	<link href="./output.css" rel="stylesheet">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@200;300;400&family=DM+Sans:wght@300;400;500;700&display=swap" rel="stylesheet">
       
</head>

<body>
	<div class="navbar">
		<h1>Karen Ma</h1>							
	</div>
	<main class="writeup">
<div>
	<a href="./index.html">Back</a>
</div>

<div class="pageTitle">

## Automated Jobs Builder

</div>

<div class="splash">

![Image of jobs overview](./public/images/splashJobs.png)

</div>
<div class = "text">

### Summary
Automations allowed our users to create custom automated jobs for simplifying their workflow from sending slack notifications to triggering reports. However, the complexity of the feature meant that our support staff spent many hours troubleshooting and a lack of visibility into how jobs worked caused distrust and hesitancy to adopt further jobs-related features.  

### Key Insights

#### Shared understanding comes from shared terminology

Misunderstandings due to terminology made automations even more confusing than it already was. From the definition of what was considered a day, to what is considered a failed job, we lacked a consensus, even internally on what the correct answer was. After creating an internal glossary with clarified definitions, I was able to add error text, help text and introduce new terms that were more precise and matched our users' language comprehension. 

#### Automation requires good audits

When it comes to GRC software, trust is the golden currency. Users were interested in offloading their workload to automations but needed a strong paper trail and clear visibility to trust their processes were being followed. By adding preview testing capabilities and a log of jobs fired with alerts for failed jobs, users could validate automated behavior and investigate any unexpected failures. 

#### Power users can build anything from basic building blocks 

Power users created jobs that were highly complex and surpassed our own expectations of what we thought was possible, creating chain reactions and hacking our scheduling logic. The original creation flow was too simplistic and didn't match how our users were using the feature. Introducing the idea of a jobs overview and overhauling the creation process better matched our users' mental models and revealed the true potential behind automated jobs. 

</div>

![Image of retirement advice onboarding](./public/images/JobTrigger.png)
![Image of retirement advice dashboard](./public/images/JobOperation.png)
![Image of retirement advice dashboard](./public/images/JobPreview.png)
![Image of retirement advice dashboard](./public/images/JobHistory.png)
![Image of retirement advice dashboard](./public/images/JobHistoryDetails.png)
![Image of retirement advice dashboard](./public/images/JobSchedule.png)


<html>
	</main>
</body>

</html>

SLACK_NOTIFIER = Slack::Notifier.new(
	"https://hooks.slack.com/services/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",
	channel: '#general'
)

JOBS_SLACK_NOTIFIER = Slack::Notifier.new(
	"https://hooks.slack.com/services/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",
	channel: '#job-postings'
)
#!/usr/bin/env node
import { Octokit } from '@octokit/rest'

(async() => {
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

  try {
    console.log('Trying to create the issue...')

    await octokit.rest.issues.create({
      owner: 'carloscuesta',
      repo: 'n26-github-actions-demo',
      title: 'Hello world!',
      body: '## Hello world! 👋'
    });

    console.log('Success! ✅')
  } catch (error) {
    console.error('ERROR: Something happened', error)
  }
})()

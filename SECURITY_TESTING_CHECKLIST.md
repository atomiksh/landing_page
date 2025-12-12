# Security Testing Checklist

This checklist should be completed before deploying security updates to production.

## Pre-Deployment Testing

### Phase 1: Foundation Testing

#### Security Headers
- [ ] Verify all pages load correctly with security headers
- [ ] Test X-Frame-Options prevents iframe embedding
- [ ] Verify X-Content-Type-Options prevents MIME sniffing
- [ ] Check Referrer-Policy is working correctly

#### Input Validation
- [ ] Test form with normal inputs (should work)
- [ ] Test form with empty required fields (should show errors)
- [ ] Test email validation with invalid formats
- [ ] Test input length limits (try exceeding max lengths)
- [ ] Test with special characters (apostrophes, hyphens, international names)

### Phase 2: Input Sanitization Testing

#### XSS Prevention
- [ ] Test with `<script>alert('XSS')</script>` in name field
- [ ] Test with `javascript:alert('XSS')` in any field
- [ ] Test with event handlers: `onclick="alert('XSS')"` in message
- [ ] Test with HTML tags: `<img src=x onerror=alert('XSS')>`
- [ ] Verify sanitized content is displayed correctly
- [ ] Test with legitimate special characters (should not be stripped)

#### Input Sanitization Edge Cases
- [ ] Test with international characters (é, ñ, ü, etc.)
- [ ] Test with emojis
- [ ] Test with URLs in message field
- [ ] Test with code snippets in message field
- [ ] Verify apostrophes in names (O'Brien, D'Angelo)

### Phase 3: CSP Testing

#### Content Security Policy
- [ ] Verify all pages load with CSP enabled
- [ ] Check browser console for CSP violations
- [ ] Test form submission works (FormSubmit API)
- [ ] Verify Google Fonts load correctly
- [ ] Test Tailwind CDN loads (static HTML pages)
- [ ] Verify Framer Motion animations work
- [ ] Test all external resources load

#### CSP Violations
- [ ] Document any CSP violations in console
- [ ] Fix violations before deploying
- [ ] Re-test after fixes

### Phase 4: Advanced Protections Testing

#### Rate Limiting
- [ ] Submit form once (should work)
- [ ] Submit form 3 times rapidly (should work with current limit)
- [ ] Submit form 11+ times rapidly (should show rate limit error)
- [ ] Wait for rate limit window to expire, then submit (should work)
- [ ] Test rate limit message displays correctly
- [ ] Verify rate limit resets after successful submission

#### CSRF Protection
- [ ] Verify CSRF token is generated
- [ ] Check CSRF token is sent in request headers
- [ ] Test form submission with CSRF token (should work)
- [ ] Verify CSRF token is unique per session

#### Honeypot
- [ ] Verify honeypot field is hidden from users
- [ ] Test form submission with empty honeypot (should work)
- [ ] Test form submission with filled honeypot (should silently fail)
- [ ] Verify honeypot doesn't affect legitimate users

### Phase 5: Route Security Testing

#### Route Validation
- [ ] Test valid routes: `/`, `/pricing`, `/terms`, `/refund`, `/privacy`
- [ ] Test invalid route: `/invalid` (should redirect to `/`)
- [ ] Test hash navigation: `/#pricing`, `/#features`, `/#faq`
- [ ] Test malicious hash: `/#<script>alert('XSS')</script>` (should be sanitized)
- [ ] Verify hash navigation scrolls to correct section

### Phase 6: Cross-Browser Testing

#### Browser Compatibility
- [ ] Test in Chrome (latest)
- [ ] Test in Firefox (latest)
- [ ] Test in Safari (latest)
- [ ] Test in Edge (latest)
- [ ] Test on mobile browsers (iOS Safari, Chrome Mobile)

### Phase 7: Performance Testing

#### Performance Impact
- [ ] Measure page load time (should be < 3s)
- [ ] Test form submission time (should be < 2s)
- [ ] Check bundle size hasn't increased significantly
- [ ] Verify no console errors or warnings

## Post-Deployment Monitoring

### Week 1 Monitoring
- [ ] Monitor form submission success rate (should be > 95%)
- [ ] Check for CSP violations in production
- [ ] Monitor rate limit triggers (should be minimal)
- [ ] Track honeypot triggers (identify bots)
- [ ] Review security logs for anomalies
- [ ] Collect user feedback on form usability

### Week 2-4 Monitoring
- [ ] Gradually tighten rate limiting if needed
- [ ] Remove `unsafe-inline` from CSP if possible
- [ ] Remove `unsafe-eval` from CSP if possible
- [ ] Monitor for false positives in validation
- [ ] Adjust sanitization rules based on real data

## Rollback Plan

If issues arise:

1. **Quick Disable via Feature Flags**
   - Edit `src/config/security.ts`
   - Set problematic feature to `false`
   - Rebuild and deploy

2. **Git Rollback**
   ```bash
   git tag -a v1.0.0-pre-security  # Tag current working version
   git revert <commit-hash>          # Revert specific security commit
   # OR
   git reset --hard <previous-commit> # Full rollback (use with caution)
   ```

3. **CSP Rollback**
   - Remove CSP meta tag from `index.html`
   - Remove CSP from static HTML files
   - Rebuild and deploy

## Testing Tools

### Recommended Tools
- [OWASP ZAP](https://www.zaproxy.org/) - Security scanner
- [Burp Suite Community](https://portswigger.net/burp/communitydownload) - Web security testing
- [Mozilla Observatory](https://observatory.mozilla.org/) - Security headers checker
- Browser DevTools - CSP violation reporting

### Manual Testing Scripts
```bash
# Test XSS payloads
<script>alert('XSS')</script>
<img src=x onerror=alert('XSS')>
javascript:alert('XSS')
onclick="alert('XSS')"

# Test SQL Injection (even though no DB)
' OR '1'='1
'; DROP TABLE users; --

# Test CSRF
# Try submitting form from external site (should fail)

# Test Rate Limiting
# Submit form 15 times rapidly
```

## Success Criteria

- ✅ All tests pass
- ✅ No CSP violations in production
- ✅ Form submission success rate > 95%
- ✅ No legitimate users blocked by rate limiting
- ✅ No false positives in input validation
- ✅ Performance impact < 5%
- ✅ No security vulnerabilities in npm audit

## Notes

- Keep this checklist updated as new security features are added
- Document any issues found during testing
- Update rollback plan based on deployment experience
- Review and update quarterly


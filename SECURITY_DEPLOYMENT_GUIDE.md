# Security Deployment Guide

## Quick Start

This guide provides step-by-step instructions for deploying the security updates safely.

## Pre-Deployment Checklist

- [ ] Review `SECURITY_IMPLEMENTATION.md`
- [ ] Review `SECURITY_TESTING_CHECKLIST.md`
- [ ] Test locally: `npm run build && npm run preview`
- [ ] Run security audit: `npm run security:audit`
- [ ] Review feature flags in `src/config/security.ts`
- [ ] Have rollback plan ready

## Deployment Steps

### Step 1: Local Testing
```bash
# Install dependencies
npm install

# Build the project
npm run build

# Preview production build
npm run preview

# Test all features:
# - Form submission
# - Navigation
# - All routes
# - Hash navigation
```

### Step 2: Review Security Configuration
Open `src/config/security.ts` and verify settings:

```typescript
// Recommended initial settings:
enableSanitization: true,
sanitizationLevel: 'moderate',  // Start moderate
enableValidation: true,
enableRateLimiting: true,
maxSubmissionsPerWindow: 10,   // Start lenient
enableCSRF: true,
enableHoneypot: true,
enableRouteValidation: true,
enableHashSanitization: true,
enableSecurityLogging: true,
logLevel: 'warnings',           // Log warnings and errors
```

### Step 3: Deploy to Production

#### Option A: Full Deployment (Recommended for Phase 1)
```bash
# Commit changes
git add .
git commit -m "feat: Implement OWASP Top 10 security hardening"

# Push to production
git push origin main
```

#### Option B: Phased Deployment
Deploy features incrementally using feature flags.

### Step 4: Post-Deployment Monitoring

#### First 24 Hours
- [ ] Monitor form submission success rate
- [ ] Check browser console for errors
- [ ] Review security logs
- [ ] Test form submission from production
- [ ] Verify all pages load correctly

#### First Week
- [ ] Track rate limit hits
- [ ] Monitor CSP violations
- [ ] Review honeypot triggers
- [ ] Collect user feedback
- [ ] Adjust thresholds if needed

## Monitoring Commands

### Check Security Logs
Open browser console and filter for `[Security]` messages.

### Monitor Form Submissions
Check FormSubmit dashboard for submission patterns.

### Review Rate Limiting
Check browser console for rate limit warnings.

## Troubleshooting

### Issue: Form submissions failing
**Solution:**
1. Check browser console for errors
2. Verify FormSubmit API is accessible
3. Check CSP violations
4. Temporarily disable rate limiting if needed:
   ```typescript
   // src/config/security.ts
   enableRateLimiting: false,
   ```

### Issue: CSP blocking resources
**Solution:**
1. Check browser console for CSP violations
2. Add allowed source to CSP in `index.html`
3. Rebuild and redeploy

### Issue: Rate limiting too strict
**Solution:**
1. Increase threshold in `src/config/security.ts`:
   ```typescript
   maxSubmissionsPerWindow: 20,  // Increase from 10
   ```
2. Rebuild and redeploy

### Issue: Input validation too strict
**Solution:**
1. Check validation errors in console
2. Adjust max lengths in `src/config/security.ts`:
   ```typescript
   maxLengths: {
     name: 150,  // Increase from 100
     // ...
   }
   ```
3. Or change sanitization level:
   ```typescript
   sanitizationLevel: 'permissive',  // Less aggressive
   ```

## Rollback Procedures

### Quick Feature Disable
1. Edit `src/config/security.ts`
2. Set problematic feature to `false`
3. Rebuild: `npm run build`
4. Redeploy

### Full Rollback
```bash
# Tag current version first
git tag -a v1.0.0-pre-security

# Revert to previous commit
git revert HEAD
# OR
git reset --hard <previous-commit-hash>

# Force push (use with caution)
git push origin main --force
```

### CSP Rollback
Remove CSP meta tags from:
- `index.html` (lines 14-26)
- `public/terms.html`
- `public/privacy.html`
- `public/refund.html`
- `public/pricing.html`

## Gradual Tightening Schedule

### Week 1: Foundation
- ✅ Security headers
- ✅ Basic validation
- ✅ Moderate sanitization
- ✅ Lenient rate limiting (10/min)

### Week 2: Monitoring
- Monitor all metrics
- Adjust thresholds based on data
- Fix any CSP violations

### Week 3: Tightening
- Reduce rate limit to 5/min
- Tighten sanitization if needed
- Remove `unsafe-eval` from CSP (if possible)

### Week 4: Final Hardening
- Reduce rate limit to 3/min
- Remove `unsafe-inline` from CSP (if possible)
- Final security audit

## Known Issues

### npm audit vulnerabilities
**Status:** 2 moderate vulnerabilities in esbuild/vite
**Impact:** Development dependencies only, not production
**Action:** Can be addressed later with `npm audit fix --force` (requires Vite 7 upgrade)

### CSP and Vite
**Status:** Requires `unsafe-inline` and `unsafe-eval` for Vite dev server
**Impact:** Development only, production build doesn't need these
**Action:** Consider using nonces/hashes in future

## Support Resources

- **Security Implementation:** See `SECURITY_IMPLEMENTATION.md`
- **Testing Procedures:** See `SECURITY_TESTING_CHECKLIST.md`
- **Configuration:** See `src/config/security.ts`
- **Monitoring:** Check browser console for `[Security]` logs

## Success Metrics

After deployment, track:
- ✅ Form submission success rate > 95%
- ✅ Zero CSP violations
- ✅ Minimal rate limit hits (< 1% of submissions)
- ✅ No legitimate users blocked
- ✅ Performance impact < 5%

---

**Ready to Deploy:** ✅ Yes
**Risk Level:** Low (with feature flags)
**Rollback Time:** < 5 minutes (via feature flags)


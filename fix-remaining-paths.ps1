# Fix blog.html
$content = Get-Content "blog.html" -Raw
$content = $content -replace 'src="media/', 'src="assets/images/backgrounds/'
$content = $content -replace 'src="images/', 'src="assets/images/backgrounds/'
$content = $content -replace 'src="img/', 'src="assets/images/backgrounds/'
$content = $content -replace 'src="team/', 'src="assets/images/team/'
$content = $content -replace 'src="Image/', 'src="assets/images/team/'
Set-Content "blog.html" -Value $content -Encoding UTF8
Write-Host "✅ Fixed blog.html" -ForegroundColor Green

# Fix news.html
$content = Get-Content "news.html" -Raw
$content = $content -replace 'src="media/', 'src="assets/images/backgrounds/'
$content = $content -replace 'src="images/', 'src="assets/images/backgrounds/'
$content = $content -replace 'src="img/', 'src="assets/images/backgrounds/'
$content = $content -replace 'src="team/', 'src="assets/images/team/'
$content = $content -replace 'src="Image/', 'src="assets/images/team/'
Set-Content "news.html" -Value $content -Encoding UTF8
Write-Host "✅ Fixed news.html" -ForegroundColor Green

# Fix security-practices.html
$content = Get-Content "security-practices.html" -Raw
$content = $content -replace 'src="media/', 'src="assets/images/backgrounds/'
$content = $content -replace 'src="images/', 'src="assets/images/backgrounds/'
$content = $content -replace 'src="img/', 'src="assets/images/backgrounds/'
$content = $content -replace 'src="team/', 'src="assets/images/team/'
$content = $content -replace 'src="Image/', 'src="assets/images/team/'
Set-Content "security-practices.html" -Value $content -Encoding UTF8
Write-Host "✅ Fixed security-practices.html" -ForegroundColor Green

# Fix tools.html
$content = Get-Content "tools.html" -Raw
$content = $content -replace 'src="media/', 'src="assets/images/backgrounds/'
$content = $content -replace 'src="images/', 'src="assets/images/backgrounds/'
$content = $content -replace 'src="img/', 'src="assets/images/backgrounds/'
$content = $content -replace 'src="team/', 'src="assets/images/team/'
$content = $content -replace 'src="Image/', 'src="assets/images/team/'
Set-Content "tools.html" -Value $content -Encoding UTF8
Write-Host "✅ Fixed tools.html" -ForegroundColor Green
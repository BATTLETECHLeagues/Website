::Deployment
echo Handling node.js deployment.
 
:: 1. KuduSync
IF /I "%IN_PLACE_DEPLOYMENT%" NEQ "1" ( 
  call :ExecuteCmd "%KUDU_SYNC_CMD%" -v 50 -f "%DEPLOYMENT_SOURCE%" -t "%DEPLOYMENT_TARGET%" -n "%NEXT_MANIFEST_PATH%" -p "%PREVIOUS_MANIFEST_PATH%" -i ".git;.hg;.deployment;deploy.cmd" 
  IF !ERRORLEVEL! NEQ 0 goto error 
) 

echo Sync complete
  
:: 2. Select node version
call :SelectNodeVersion
 
:: 3. Install npm packages
echo Install npm packages
IF EXIST "%DEPLOYMENT_TARGET%\package.json" (
  pushd "%DEPLOYMENT_TARGET%"
  call :ExecuteCmd !NPM_CMD! install
  IF !ERRORLEVEL! NEQ 0 goto error
  popd
)
echo Install npm complete
 
:: 4. Build the webclient
echo run npm build
IF EXIST "%DEPLOYMENT_TARGET%\package.json" (
  pushd "%DEPLOYMENT_TARGET%"
  call :ExecuteCmd !NPM_CMD! run build
  IF !ERRORLEVEL! NEQ 0 goto error
  popd
)
echo run npm build complete

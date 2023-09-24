#!/usr/bin/env bash
#
# version: 2021/01/06-v1
# the shell is using for generator mock server


#  exec shell example:
#    * run by default: from URL(http://localhost:3000/api-json)
#      ./openapi-server-start.sh
#    * run by local file
#      ./openapi-server-start.sh -s "./foo/bar.json"
#    * run by URL file
#      ./openapi-server-start.sh -s https://raw.githubusercontent.com/openapitools/openapi-generator/master/modules/openapi-generator/src/test/resources/3_0/petstore.yaml

#  default source define value:
#    fileSource: a openapi file, it will be yaml or json format a RUL source.
#      * default: "http://localhost:3000/api-json"
#
#    bindHost: the mock server with docker bind host
#      * default: "0.0.0.0"
#
#    ServerPort: mock server run port,
#      * default: "4010"
#
#    dockerFlag: option of docker exec flag
#      * default: "-lt"
#
#    containerName: container rename
#      * default: "mockServer"
#
REPOSITORY_NAME=$(basename "$(git rev-parse --show-toplevel)")
fileSource="http://localhost:3000/api-json"
bindHost="0.0.0.0"
serverPort="4010"
dockerFlag="-it --rm"
containerName="$REPOSITORY_NAME"_mock_server

# read option
while test $# -gt 0; do
  case "$1" in
    -h|--help)
      echo "* open-api generator for mock server"
      echo " "
      echo "  openapi-server-start.sh [-s sourceFile] [-p buildPort]"
      echo " "
      echo "options:"
      echo "-h, --help                  show help"
      echo "-s, --fileSource=FILEPATH   read openapi file source (it will be yaml, json or http/https format URL), default:\"http://localhost:3000/api-json\""
      echo "-l, --buildPort=PORT        bind port(terminal will show 4010, but you PORT is work ), default:\"4010\""
      echo "-d, --dockerFlag=FLAG       docker exec option, default: \"-it --rm\""
      echo " "
      exit 0
      ;;
    -s|--fileSource)
      shift
      if test $# -gt 0; then
        fileSource=$1
      else
        echo "no process specified"
        exit 1
      fi
      shift
      ;;
    -b|--buildHost)
      shift
      if test $# -gt 0; then
        bindHost=$1
      else
        echo "no process specified"
        exit 1
      fi
      shift
      ;;
    -p|--buildPort)
      shift
      if test $# -gt 0; then
        serverPort=$1
      else
        echo "no process specified"
        exit 1
      fi
      shift
      ;;
    -d|--dcokerFlag)
      shift
      if test $# -gt 0; then
        dockerFlag=$1
      else
        echo "no process specified"
        exit 1
      fi
      shift
      ;;
    -n|--containerName)
      shift
      if test $# -gt 0; then
        containerName=$1
      else
        echo "no process specified"
        exit 1
      fi
      shift
      ;;
    *)
      break
      ;;
  esac
done

# exec curl
if [[ "$fileSource" =~ ^http: ]] || [[ "$fileSource" =~ ^https: ]] || [[ "$fileSource" =~ ^ftp: ]] || [[ "$fileSource" =~  ^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3} ]]; then
  curl $fileSource -o /tmp/.nestOpenAPI.json 
else
  cp $fileSource  /tmp/.nestOpenAPI.json 
fi

# make mock server
docker run $dockerFlag --name $containerName -p "$serverPort":4010 -v /tmp/.nestOpenAPI.json:/tmp/.nestOpenAPI.json -P stoplight/prism:4 mock -h $bindHost "/tmp/.nestOpenAPI.json"
